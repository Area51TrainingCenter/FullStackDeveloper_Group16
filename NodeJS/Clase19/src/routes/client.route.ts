import * as express from "express"
import { ClientController } from "../controllers"
import * as Joi from "@hapi/joi"

const route = express.Router()
const controller = new ClientController()

route.get("/", controller.getAll)
route.get("/:id", controller.getOne)
route.post("/", (req, res, next) => {

	const schemaValidation = Joi.object({
		phone: Joi.string().required()
	})

	const body = { phone: req.body.phone }

	const validate = schemaValidation.validate(body)

	if (validate.errors) { }
	else {
		next()
	}

}, controller.insert)
route.put("/:id", controller.update)
route.delete("/:id", controller.delete)

export default route