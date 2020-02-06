import { GenericController } from './generic.controller';
import { ClienteModel } from '../models';
class Controller extends GenericController {

	constructor() {
		super(ClienteModel)
	}

	async getListOrders(req, res) {
		const results = await ClienteModel.listadoOrdenes()

		res.json(results)
	}

}

export default Controller