const http = require("http")

const servidor = http.createServer((req, res) => {
	const usuarios = [
		{ username: "user01" },
		{ username: "user02" }
	]

	// res.writeHead(200, { "content-type": "text/html; charset=utf8" })
	res.writeHead(200, { "content-type": "application/json" })
	res.end(JSON.stringify(usuarios))
	/* res.write("Hola<br>")
	res.write("Que hay de nuevo<br>")
	res.write("Nada, puro viejo<br>")
	res.end("Nos vemos el sábado") */
	console.log("Ocurrió un evento")
})

servidor.listen(3000, () => console.log("Servidor ejecutándose en el puerto 3000"))

