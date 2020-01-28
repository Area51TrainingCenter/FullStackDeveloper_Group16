import * as moment from "moment"
import * as jwt from "jwt-simple"

const KEYWORD_SECRET = "f9e77f69-a72b-48f7-ba79-80975ac1947a"

const crearToken = (_id, name) => {
	const payload = {
		_id,
		name,
		iat: moment().unix(),
		exp: moment().add(60, "seconds")
	}

	const token = jwt.encode(payload, KEYWORD_SECRET)

	return token
}

const validarToken = token => {
	return new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(token, KEYWORD_SECRET)
			resolve(payload)
		} catch (error) {
			reject(error)
		}
	})
}

export { crearToken, validarToken }