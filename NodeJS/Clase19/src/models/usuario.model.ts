import * as mongoose from "mongoose"

const scheme = new mongoose.Schema({
	name: String,
	lastname: String,
	email: String
})

const model = mongoose.model("Usuarios", scheme)