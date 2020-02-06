import * as mongoose from "mongoose"

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},

	lastname: {
		type: String,
		required: true
	},

	company: {
		type: String
	},

	email: {
		type: String,
		required: true,
		email: true,
		unique: true
	},

	phone: String,

	password: {
		type: String,
		required: true
	}
})

const model = mongoose.model("Clientes", schema)

export default model