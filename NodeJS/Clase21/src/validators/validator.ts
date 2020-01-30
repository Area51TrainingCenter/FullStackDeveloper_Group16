import * as httpStatusCodes from "http-status-codes"

const validador = (schemas) => {
	return (req, res, next) => {
		const arr = ["body", "params", "query", "headers"]

		arr.forEach(async it => {
			if (schemas[it]) {
				const validator = await schemas[it].validate(req[it])

				if (validator.error) {
					return res.status(httpStatusCodes.LENGTH_REQUIRED).json(validator.error)
				}
			}
		})

		next()

		/* 	const schemaValidation = Joi.object({
				phone: Joi.string().required(),
				password: Joi.string().required()
			})
		
			const schemaValidationParams = Joi.object({
				id: Joi.number().required()
			}) */

		/* 	const parametrosUrl = req.params  // :id
		
			const validateParams = schemaValidationParams.validate(parametrosUrl)
		
			if (validateParams.error) {
				res.status(httpStatusCodes.RESET_CONTENT).json(validateParams.error)
			} else {
				next()
			} */

	}
}

export { validador }