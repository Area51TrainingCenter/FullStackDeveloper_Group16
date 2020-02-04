import * as Joi from "@hapi/joi"

const schemasUser = {
	POST_LOGIN: {
		body: Joi.object({
			email: Joi.string().required(),
			password: Joi.string().required()
		})
	},
	AUTHORIZATION: {
		headers: Joi.object({
			authorization: Joi.string().required(),
			"user-agent": Joi.string(),
			accept: Joi.string(),
			"cache-control": Joi.string(),
			"postman-token": Joi.string(),
			host: Joi.string(),
			"accept-encoding": Joi.string(),
			connection: Joi.string()
		})
	}
}

export { schemasUser }