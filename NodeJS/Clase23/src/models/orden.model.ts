const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    fecha: {
        type: Date,
        defaultTo: new Date()
    },

    details: [
        { type: String }
    ],

    client: {
        type: mongoose.Schema.ObjectId,
        ref: "Clientes"
    }
})

function Poblar(next) {
    this.populate("client")
    next()
}

schema.pre("find", Poblar)

const model = mongoose.model("Ordenes", schema)

export default model