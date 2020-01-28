import * as Joi from "@hapi/joi"

const schemasUser = {
	POST_LOGIN: {
		body: Joi.object({
			email: Joi.string().required(),
			password: Joi.string().required()
		})
	}
}

export { schemasUser }