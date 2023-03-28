import mongoose from "mongoose";

const RifasSchema = new mongoose.Schema({
   numero: {
    type: Number,
    require: [true, "ingrese el nmero "]
   },
   estado: {
    type: String
   }
})

export default mongoose.models.Listado || mongoose.model('Listado', RifasSchema);