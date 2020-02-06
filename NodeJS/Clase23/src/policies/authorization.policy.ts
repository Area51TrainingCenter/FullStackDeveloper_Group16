import * as httpStatusCode from "http-status-codes"

const authorization = (...rolesAllowed) => {
	return (req, res, next) => {
		// const rolesAllowed = ["admin"]
		const rolesUser = res.locals.roles
		let allowed = false

		rolesAllowed.forEach(role => {
			if (rolesUser.indexOf(role) > -1) allowed = true
		})

		if (allowed) return next()

		res.status(httpStatusCode.FORBIDDEN).send("User is not authorized")
	}
}

export default authorization