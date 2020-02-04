import * as Joi from "@hapi/joi"

const schemasClient = {
	PUT: {
		body: Joi.object({
			phone: Joi.string().required(),
			password: Joi.string().required()
		}),
		params: Joi.object({
			id: Joi.number().required()
		})
	},
	POST: {
		body: Joi.object({
			phone: Joi.string().required(),
			password: Joi.string().required()
		})
	}
}

export { schemasClient }