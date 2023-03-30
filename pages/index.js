import React from "react";
import RifaPuesto from "../components/RifaPuesto";

import Layout from "../components/Layout";
import Listado from "../models/Listado";
import conectarBD from "../lib/dbConnect";

const Rifa = ({ listados }) => {
  //console.log(listados);

  const puestosComponentes = listados.map((puesto) => (
    <RifaPuesto
      key={puesto._id}
      numeroPuesto={puesto.numero}
      estado={puesto.estado}
      nombre={puesto.nombre}
      pago={puesto.pago}
      id={puesto._id}
    />
  ));

  return (
    <Layout>
      <div className="container">
        <div className="col-12">
          <h3 className="text-justify">
            Rifa pro "Accidente de Transito" Nequi: 3125858981{" "}
            <span className="text-danger">Valor rifa: 15.000.00</span>
            <span> Premio de $300.000.00</span> juega el 07/04/2023 con loteria
            Santander
          </h3>
        </div>
        <div className="row row-cols-auto py-4 border border-success justify-content-center">
          {puestosComponentes}
        </div>
      </div>
    </Layout>
  );
};

export default Rifa;

export async function getServerSideProps() {
  try {
    await conectarBD();
    const res = await Listado.find().sort({ numero: 1 });
    const listados = res.map((doc) => {
      const listado = doc.toObject();
      listado._id = `${listado._id}`;
      return listado;
    });
    //console.log(listados);
    return { props: { listados: listados } };
  } catch (error) {
    console.log(error);
  }
}
