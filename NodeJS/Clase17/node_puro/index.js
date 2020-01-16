console.log("Hola Mundo")

const fs = require("fs")

console.log("Inicio")
const texto = fs.readFileSync("./lectura.txt", { encoding: "utf8" })
console.log(texto)
console.log("Fin")

let contenidoArchivo
console.log("Inicio de lectura")
fs.readFile("./lectura.txt", { encoding: "utf8" }, (err, contenido) => {
	contenidoArchivo = contenido
	console.log(contenidoArchivo)
})
console.log("Fin de la lectura")