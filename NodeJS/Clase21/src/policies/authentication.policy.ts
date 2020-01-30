import { validarToken } from "../services/token.service"
import * as httpStatusCode from "http-status-codes"

const authentication = (req, res, next) => {
	const authorization = req.headers.authorization

	if (authorization && authorization.split(" ").length > 0) {
		const token = authorization.split(" ")[1]

		validarToken(token)
			.then(payload => {
				res.locals.roles = payload.roles
				next()
			})
			.catch(error => {
				res.status(httpStatusCode.FORBIDDEN).send("Token invalid")
			})

	} else {
		res.status(httpStatusCode.FORBIDDEN).send("User is not authorizated")
	}
}

export default authentication