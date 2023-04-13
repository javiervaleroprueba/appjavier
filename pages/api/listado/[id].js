import conectarBD from "../../../lib/dbConnect";
import Listado from "../../../models/Listado";

export default async function handler(req, res) {
  await conectarBD();

  // GET api/listado/:id (obterner un id y listarlo)

  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      return await getListado(req, res);
    case "PUT":
      return await updateListado(req, res);
    case "DELETE":
      try {
        const listado = await Listado.findByIdAndDelete(id);
        if (!listado) {
          return res.status(404).json({ success: false });
        }
        return res.json({ success: true, data: listado });
      } catch (error) {
        return res.status(404).json({ success: false });
      }
    default:
      return res
        .status(500)
        .json({ succes: false, error: "Falla del servidor" });
  }
}

const getListado = async (req, res) => {
    const { id } = req.query;
    await conectarBD();
    const result = await Listado.findById(id);
    return res.status(200).json(result);
  }

  const updateListado = async (req, res) => {
    await conectarBD();
    try {
      const { id } = req.query;
      const listado = await Listado.findByIdAndUpdate(
          id,
          req.body,
          {
              new: true,
              runValidators: true
          }
      );
      if (!listado) {
          return res.status(404).json({"success": false})
      }
      return res.json({"success": true, data: listado})
    } catch (error) {
      return res.status(404).json({"success": false})
    }
  };
