import mongoose from "mongoose";

const RifasSchema = new mongoose.Schema({
   numero: {
      type: String,
      require: [true, "ingrese el nmero "]
     },
     estado: {
      type: String
     },
     nombre: {
      type: String
     },
     pago: {
      type: String
     }
})

export default mongoose.models.Listado || mongoose.model('Listado', RifasSchema);