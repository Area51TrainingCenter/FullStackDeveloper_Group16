import * as multer from "multer"
import * as jimp from "jimp"
import { IError } from "./errors.handler"
import { STORAGE } from "../enums/storage.enum"
import { ParametersUpload } from "../interfaces/parameters-upload.interface"
import { TYPE } from "../enums/type.enum"

const filesHandler = {
    upload: (parametros: ParametersUpload) => {
        let opciones, middleware

        switch (parametros.storage) {
            case STORAGE.DISK:
                const opcionesStorage = {
                    destination(req, file, cb) {
                        cb(null, "./public/avatar")
                    },
                    filename(req, file, cb) {
                        req.body.foto = file.originalname
                        cb(null, file.originalname)
                    }
                }

                opciones = {
                    storage: multer.diskStorage(opcionesStorage)
                }

                break;
            default:
                opciones = {
                    storage: multer.memoryStorage(),
                    fileFilter: (req, file, cb) => {
                        const esFoto = file.mimetype.startsWith("image/")

                        if (esFoto) return cb(null, true)

                        const error: IError = new Error("No es una imagen")
                        error.status = 500


                        cb.next(error, true)
                    }
                }
                break;
        }

        switch (parametros.type) {
            case TYPE.SINGLE:
                middleware = multer(opciones).single(parametros.fields)
                break;
            case TYPE.FIELDS:
                middleware = multer(opciones).fields(parametros.fields)
                break;
            case TYPE.ARRAY:
                middleware = multer(opciones).array(parametros.fields)
                break;
        }

        return middleware
    },


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

        return multer(opciones).single("foto")
    },

    uploadFieldsMemory: () => {
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

        return multer().fields([{ name: "foto" }, { name: "avatar" }])
    },

    uploadArrayMemory: () => {
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

        return multer(opciones).array("galeria")
    },

    resizeOne: () => {
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
    },

    resizeFields: () => {
        return async (req, res, next) => {
            if (!req.files) return next()

            for (const prop in req.files) {
                for (const img of req.files[prop]) {
                    const extension = img.mimetype.split("/")[1]
                    const name = Date.now()

                    const newName = `${name}.${extension}`

                    req.body[img["fieldname"]] = newName

                    const foto = await jimp.read(img.buffer)
                    await foto.resize(120, jimp.AUTO)
                    await foto.write("./public/avatar/" + newName)
                }
            }

            next()
        }
    },

    resizeArray: () => {
        return async (req, res, next) => {
            if (!req.files) return next()

            for (const file of req.files) {
                const extension = file.mimetype.split("/")[1]
                const name = Date.now()

                const newName = `gal_${name}.${extension}`

                req.body[file["fieldname"]] = newName

                const foto = await jimp.read(file.buffer)
                await foto.resize(120, jimp.AUTO)
                await foto.write("./public/avatar/" + newName)
            }

            next()
        }
    }
}

export { filesHandler }