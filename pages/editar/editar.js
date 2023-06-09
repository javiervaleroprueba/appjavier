import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

import Layout from "../../components/Layout";

function Editar() {
  const [listado, setListado] = useState([]);

  const getResidentes = async () => {
    try {
      const result = await axios.get("/api/listado");
      //console.log(result.data);
      setListado(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResidentes();
  }, [1]);

  return (
    <Layout>
      <div className="container-fluid">
        <div className="col-12 ">
          <h1 className="text-center">LISTADO NUMEROS DE LA RIFA</h1>
          <div className="row ">
            <div className="col-6 col-md-2 fs-3 text-center text-content-center">
              Subconsultas:{" "}
            </div>
            <div className="col-6 col-md-1">
              <Link href={"/"}>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg"
                >
                  Regresar
                </button>
              </Link>
            </div>
          </div>

          <hr />
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">NUMERO</th>
                  <th scope="col">NOMBRE</th>
                  <th scope="col">CELULAR </th>
                  <th scope="col">PAGO</th>
                  <th scope="col">ESTADO</th>
                </tr>
              </thead>

              <tbody>
                {listado.map((listado, index) => (
                  <tr key={listado._id}>
                    <td scope="row">{index + 1}</td>
                    <td scope="row">{listado.numero}</td>
                    <td className="">{listado.nombre}</td>
                    <td>{listado.celular}</td>
                    <td>{listado.pago}</td>
                    <td>{listado.estado}</td>
                    <td>
                      <Link href={`/editar/${listado._id}`}>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-lg"
                        >
                          Editar
                        </button>
                      </Link>
                    </td>

                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Editar;
