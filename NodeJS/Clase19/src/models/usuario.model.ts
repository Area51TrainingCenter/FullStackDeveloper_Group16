import * as mongoose from "mongoose"

const scheme = new mongoose.Schema({
	name: {
		type: String,
		size: 255,
		required: true
	},
	lastname: String,
	email: {
		type: String,
		required: true,
		unique: true,
		email: true,
		lowercase: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	},
	status: {
		type: Boolean,
		defaultTo: true
	},
	createdAt: {
		type: Date,
		defaultTo: new Date()
	}
})

const model = mongoose.model("Usuarios", scheme)

export default model