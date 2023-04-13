import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import bcryptjs from "bcryptjs";

import conectarBD from "../../../lib/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  await conectarBD();

  const { user, password } = req.body;
  
  
  try {
    // Consultar si el usuario existe en la base de datos
    let [usuario] = await User.find({username: user}).lean();
    //console.log(usuario)
  
    const usernameBase = usuario.username;
    const passwordBase = usuario.password;
    

    if (usernameBase === user) {
      // Si el usuario existe y las credenciales son válidas
      console.log("Pase por aqui")
      const passwordMatch = await bcryptjs.compare(password, passwordBase);
      if (passwordMatch) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 1,
            user: usernameBase,
            username: usuario.nombre,
          },
          "RIFA2023"
        );

        const serialized = serialize("myRifaToken", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 1000 * 60 * 60 * 1,
          path: "/",
        });

        res.setHeader("Set-cookie", serialized);

        return res.status(200).json("login successful");
      } else {
        return res.status(401).json({ error: "Contraseña inválida" });
      }
    } else {
      // Si el usuario no existe en la base de datos
      return res.status(401).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}
