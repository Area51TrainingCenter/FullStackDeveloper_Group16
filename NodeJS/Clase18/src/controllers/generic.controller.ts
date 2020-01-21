export class GenericController {

	constructor(private lista: any[]) {
		this.getAll = this.getAll.bind(this)
		this.getOne = this.getOne.bind(this)
		this.insert = this.insert.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
	}

	getAll(req, res) {
		res.json(this.lista)
	}

	getOne(req, res) {
		const user = { username: "user" + req.params.id }

		res.json(user)
	}

	insert(req, res) {
		res.send("Registro insertado")
	}

	update(req, res) {
		res.send("Registro actualizado")
	}

	delete(req, res) {
		res.send("Registro eliminado")
	}
}