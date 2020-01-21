import { GenericController } from './generic.controller';
class Controller extends GenericController {

	constructor() {
		super([
			{ clientname: "client01" },
			{ clientname: "client02" }
		])
	}

}

export default Controller