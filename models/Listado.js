import mongoose from "mongoose";

const RifasSchema = new mongoose.Schema({
   numero: {
      type: String,
      required: [true, "ingrese el nmero "],
    },
    estado: {
      type: String,
    },
    nombre: {
      type: String,
    },
    pago: {
      type: String,
    },
    celular: {
      type: String,
    },
    chePago: {
      type: String,
    },
})

export default mongoose.models.Listado || mongoose.model('Listado', RifasSchema);