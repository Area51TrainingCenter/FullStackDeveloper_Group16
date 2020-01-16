import * as http from "http"
import * as express from "express"
import { promises } from "dns"

const app = express()

const initializeServer = () => {
	return new Promise((resolve, reject) => {
		const server = http.createServer(app)

		app.get("/", (req, res) => {
			res.send("Hola mundo")
		})
		app.get("/usuarios", (req, res) => {
			res.send("Lista de usuarios")
		})

		server
			.listen(3000, () => console.log("servidor ejecutándose en el puerto 3000"))
			.on("listening", () => resolve())
			.on("error", (error) => reject(error))
	})
}

export default initializeServer