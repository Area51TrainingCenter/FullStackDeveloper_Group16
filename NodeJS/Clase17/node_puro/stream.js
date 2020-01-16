const fs = require("fs")

const lecturaStream = fs.createReadStream("./lectura.txt", { encoding: "utf8" })
const escrituraStream = fs.createWriteStream("./escritura.txt", { encoding: "utf8" })

lecturaStream.on("data", chunck => {
	console.log(chunck)
	escrituraStream.write(chunck)
})