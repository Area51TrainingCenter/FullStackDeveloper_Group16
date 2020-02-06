import * as http from "http"
import * as express from "express"
import { userRoute, clientRoute, orderRoute } from '../routes';
import * as bodyParser from "body-parser"
import * as path from "path"

const app = express()

const initializeServer = () => {
	return new Promise((resolve, reject) => {
		const server = http.createServer(app)

		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: true }))

		app.use(express.static("./public"))

		/* 		app.get("/", (req, res) => {
					res.send("Hola mundo")
				}) */

		app.use("/users", userRoute)
		app.use("/clients", clientRoute)
		app.use("/orders", orderRoute)

		app.use("**", (req, res, next) => {
			// res.status(404).send("Path not found")
			console.log(path.join(__dirname, "../../", "public/index.html"))
			res.sendFile(path.join(__dirname, "../../", "public/index.html"))
		})

		server
			.listen(4000, () => console.log("servidor ejecutándose en el puerto 4000"))
			.on("listening", () => resolve())
			.on("error", (error) => reject(error))
	})
}

export default initializeServer