import conectarBD from "../../../lib/dbConnect";
import Listado from "../../../models/Listado";

export default async function handler (req, res){

    await conectarBD();

    // POST api/rifa/ (enviar un post)

    const {method} = req; 

    switch (method){
        case "POST": 
        try {
            //const escoger = new Listado(req.body).lean()
            const escoger = new Listado(req.body)
            await escoger.save();

            return res.status(200).json({"success": true, data: escoger})

        } catch (error) {
             return res
             .status(400)
             .json({"success": false, error: "Falla en el servidor"})
        }
        default:
            return res
            .status(500)
            .json({ succes: false, error: "Falla del servidor"});
    }
}