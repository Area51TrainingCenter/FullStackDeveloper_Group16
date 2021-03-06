import * as http from "http"
import * as express from "express"
import { userRoute, clientRoute } from '../routes';
import * as bodyParser from "body-parser"

const app = express()

const initializeServer = () => {
	return new Promise((resolve, reject) => {
		const server = http.createServer(app)

		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: true }))

		app.get("/", (req, res) => {
			res.send("Hola mundo")
		})

		app.use("/users", userRoute)
		app.use("/clients", clientRoute)

		server
			.listen(4000, () => console.log("servidor ejecutándose en el puerto 4000"))
			.on("listening", () => resolve())
			.on("error", (error) => reject(error))
	})
}

export default initializeServer