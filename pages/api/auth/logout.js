import { verify } from "jsonwebtoken";
import {serialize} from 'cookie'

export default async function logouthandler(req, res) {
  const { myRifaToken } = req.cookies;

  if (!myRifaToken) {
    return res.status(401).json({ error: " no token" });
  }

  try {
    verify(myRifaToken, "RIFA2023");
    const serialized =  serialize("myRifaToken", null, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 0,
        path: "/",
      });
      res.setHeader('Set-cookie', serialized)
      res.status(200).json('logout succesfull')
  } catch (error) {
    return res.status(401).json({ error: "invalido token" });
  }
}