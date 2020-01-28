import { GenericController } from './generic.controller';
import { ClienteModel } from '../models';
class Controller extends GenericController {

	constructor() {
		super(ClienteModel)
	}

}

export default Controller