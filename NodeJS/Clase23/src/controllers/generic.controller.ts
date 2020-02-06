export class GenericController {

	constructor(private model: any) {
		this.getAll = this.getAll.bind(this)
		this.getOne = this.getOne.bind(this)
		this.insert = this.insert.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
	}

	async getAll(req, res) {
		const list = await this.model.find()

		res.json(list)
	}

	async getOne(req, res) {
		const user = await this.model.findOne({ _id: req.params.id })
		res.json(user)
	}

	async insert(req, res) {
		const body = req.body
		const user = new this.model(body)
		await user.save()

		res.send("User insertado")
	}

	async update(req, res) {
		const doc = await this.model.findOneAndUpdate({ _id: req.params.id }, req.body)

		res.send("Document updated")
	}

	async delete(req, res) {
		await this.model.findOneAndRemove({ _id: req.params.id })
		res.send("Documentd deleted")
	}
}