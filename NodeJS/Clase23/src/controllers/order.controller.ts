import { GenericController } from './generic.controller';
import { OrdenModel } from '../models';
class Controller extends GenericController {

	constructor() {
		super(OrdenModel)
	}
}

export default Controller