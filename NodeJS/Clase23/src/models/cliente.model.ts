const mongoose = require("mongoose")

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

schema.statics.listadoOrdenes = function () {
	return this.aggregate([
		{
			$lookup: {
				from: "ordenes",
				localField: "_id",
				foreignField: "client",
				as: "detalles"
			}
		},
		{
			$project: { password: 0, "detalles.client": 0 }
		},
		{
			$sort: { email: 1 }
		},
		{
			$limit: 2
		},
		{
			$skip: 1
		}
	])
}

const model = mongoose.model("Clientes", schema)

export default model