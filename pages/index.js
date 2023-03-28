import React from "react";
import RifaPuesto from "../components/RifaPuesto";

import Layout from "../components/Layout";
import Listado from "../models/Listado";
import conectarBD from "../lib/dbConnect";

const Rifa = ({ listados }) => {
  //console.log(listados);

  const puestosComponentes = listados.map((puesto) => (
    <RifaPuesto key={puesto._id} numeroPuesto={puesto.numero} estado={puesto.estado} />
  ));

  return (
    <Layout>
      <div className="container">
        <div className="col-12">
          <h3>
            Rifa prodaños del carro Javier Valero Rojas, se puede consignar a
            nequi numero: 311123125251{" "}
            <span className="text-danger">valor rifa: 10.000.00</span>
          </h3>
        </div>
        <div className="row row-cols-auto py-4 border border-success">
         
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
    const res = await Listado.find();
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
