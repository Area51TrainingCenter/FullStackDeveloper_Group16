import { connectionString } from '../config/database.config';
import initializeServer from './server.service';
import mongoose = require("mongoose")

const initializeDatabase = async () => {
	const promiseDatabase = new Promise((resolve, reject) => {
		mongoose.Promise = global.Promise

		mongoose.connect(connectionString, {
			keepAlive: true,
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		mongoose.connection.on("connected", () => {
			require("../models/usuario.model")
			require("../models/cliente.model")
			require("../models/orden.model")

			resolve()
		})
		mongoose.connection.on("error", error => {
			reject(error)
		})
	})

	await promiseDatabase
}

export default initializeDatabase