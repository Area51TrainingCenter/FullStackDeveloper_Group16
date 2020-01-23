import initializeServer from './services/server.service';
import initializeDatabase from './services/database.service';

const begin = async () => {
	try {
		await initializeServer()
		console.log("Servidor inicializado")
	} catch (error) {
		console.log("Servidor está caído")
	}

	try {
		await initializeDatabase()
		console.log("Connected to Mongo")
	} catch (error) {
		console.log("No se conectó")
	}
}

begin()
