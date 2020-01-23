import { GenericController } from "./generic.controller";

class Controller extends GenericController {
	constructor() {
		super([
			{ username: "user01" },
			{ username: "user02" }
		])
	}

	getAll(req, res) {
		res.send("Método sobreescrito")
	}

	login(req, res) {
		res.send("Usuario logueado")
	}
}

export default Controller