import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import FormListado from "../../components/FormListado";
import Layout from "../../components/Layout";

const EditarListado = () => {

  const router = useRouter();

  const { id } = router.query;

  const [formData, setFormData] = useState({
    numero: "",
    nombre: "",
    estado: "",
    pago: "",
    celular: "",
  });

  const getListado = async () => {
    try {
      const result = await axios.get(`/api/listado/${id}`);
      //
      const formData = {
        numero: result.data.numero,
        nombre: result.data.nombre,
        estado: result.data.estado,
        pago: result.data.pago,
        celular: result.data.celular,
     
      };
      //console.log("setlistado se entrega",formData)
      setFormData(formData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListado();
  }, [1]);


  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
   
    <div>
       <Layout>
      <div className="container-fluid">
       <div className="mb-6">
       <h2 className="text-center ">Editar los numeros de la rifa:</h2>
       </div>
       <div className="container col-12 col-md-6">
       <FormListado forNewEscoger = {false} formData={formData} />
       </div>
      </div>
      </Layout>
    </div>
  );
};

export default EditarListado;