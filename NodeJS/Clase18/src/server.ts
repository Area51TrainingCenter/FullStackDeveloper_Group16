import initializeServer from './services/server.service';

const begin = async () => {
	try {
		await initializeServer()
		console.log("Servidor inicializado")
	} catch (error) {
		console.log("Servidor está caído")
	}
}

begin()
