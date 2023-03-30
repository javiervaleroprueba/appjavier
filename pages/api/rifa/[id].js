import conectarBD from "../../../lib/dbConnect";
import Listado from "../../../models/Listado";

export default async function handler (req, res){
    await conectarBD();

    // GET api/listado/:id (obterner un id y listarlo)

    const {method, query: {id}} = req; 

    switch (method){
        case "GET": 
        try {
            const listado = await Listado.findById(id).lean()
            if(!listado){
                return res.status(404).json({"success": false})
            }
            return res.json({"success": true, data: listado})

        } catch (error) {
             return res.status(404).json({"success": false})
        }
        case "PUT": 
        try {
            const listado = await Listado.findByIdAndUpdate(
                id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
                )
            if(!listado){
                return res.status(404).json({"success": false})
            }
            return res.json({"success": true, data: listado})

        } catch (error) {
             return res.status(404).json({"success": false})
        }
        case "DELETE": 
        try {
            const listado = await Listado.findByIdAndDelete(id)
            if(!listado){
                return res.status(404).json({"success": false})
            }
            return res.json({"success": true, data: listado})

        } catch (error) {
             return res.status(404).json({"success": false})
        }
        default:
            return res
            .status(500)
            .json({ succes: false, error: "Falla del servidor"});
    }
}