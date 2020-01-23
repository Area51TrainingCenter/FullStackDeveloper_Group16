import { GenericController } from "./generic.controller";
import { UsuarioModel } from '../models';

class Controller extends GenericController {
	constructor() {
		super(UsuarioModel)
	}
}

export default Controller