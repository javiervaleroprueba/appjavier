import FormEscoger from "../components/FormEscoger";
import Layout from "../components/Layout";

export const Escoger = () => {
  const formData = {
    numero: "",
    nombre: "",
    estado: "escogido",
    pago: "no",
    celular: "",
  };

  //console.log(listados)
  return (
    <Layout>
      <div className="container my-2 d-flex justify-content-center">
        <div className="col-12 col-md-6 border rounder ">
          <FormEscoger formData={formData} />
        </div>
      </div>
    </Layout>
  );
};

export default Escoger;
