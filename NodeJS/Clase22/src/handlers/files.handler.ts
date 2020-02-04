import * as multer from "multer"
import * as jimp from "jimp"
import { IError } from "./errors.handler"

const filesHandler = {
    uploadOneDisk: () => {
        const opcionesStorage = {
            destination(req, file, cb) {
                cb(null, "./public/avatar")
            },
            filename(req, file, cb) {
                req.body.foto = file.originalname
                cb(null, file.originalname)
            }
        }

        const opciones = {
            storage: multer.diskStorage(opcionesStorage)
        }

        return multer(opciones).single("foto")
    },

    uploadOneMemory: () => {
        const opciones = {
            storage: multer.memoryStorage(),
            fileFilter: (req, file, cb) => {
                const esFoto = file.mimetype.startsWith("image/")

                if (esFoto) return cb(null, true)

                const error: IError = new Error("No es una imagen")
                error.status = 500


                cb.next(error, true)
            }
        }

        return multer().single("foto")
    },

    resize: () => {
        return async (req, res, next) => {
            if (!req.file) return next()

            const extension = req.file.mimetype.split("/")[1]
            const name = Date.now()

            const newName = `${name}.${extension}`

            req.body.foto = newName

            const foto = await jimp.read(req.file.buffer)
            await foto.resize(120, jimp.AUTO)
            await foto.write("./public/avatar/" + newName)

            next()


        }
    }
}

export { filesHandler }