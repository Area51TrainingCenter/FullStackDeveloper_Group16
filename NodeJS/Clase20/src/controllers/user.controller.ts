import { GenericController } from "./generic.controller";
import { UsuarioModel } from '../models';
import * as bcrypt from "bcryptjs"
import * as httpStatusCodes from "http-status-codes"
import { crearToken } from '../services/token.service';

class Controller extends GenericController {
	constructor() {
		super(UsuarioModel)
	}

	async insert(req, res) {
		const body = req.body

		const saltRounds = await bcrypt.genSalt()
		const passwordEncrypt = await bcrypt.hash(body.password, saltRounds)

		body.password = passwordEncrypt

		const user = new UsuarioModel(body)
		await user.save()

		res.send("User insertado")
	}

	async login(req, res) {
		const body = req.body

		const user: any = await UsuarioModel.findOne({ email: body.email })

		if (user) {
			const valid = await bcrypt.compare(body.password, user.password)

			if (valid) {
				const token = crearToken(user._id, user.name)
				res.send({
					token
				})
			} else {
				res.status(httpStatusCodes.UNAUTHORIZED).send("User not authorized")
			}

		} else {
			res.status(httpStatusCodes.NOT_FOUND).send("User not found")
		}
	}
}

export default Controller