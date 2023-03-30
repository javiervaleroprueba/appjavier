import FormEscoger from "../../components/FormEscoger";
import Layout from "../../components/Layout";

import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error ocurrido while feching ");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  const { data } = await res.json();
  return data;
};

const EditPuesto = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data: listado, error } = useSWR(
    id ? `/api/rifa/${id}` : null,
    fetcher
  );

  if (error) {
    return <div>error</div>;
  }

  if (!listado) {
    return (
      <div className="container mt-5 text-center">
        <h1>Loading......</h1>
      </div>
    );
  }

  const formData = {
    numero: listado.numero,
    nombre: listado.nombre,
    estado: "escogido",
    pago: "no",
    celular: "",
  };

  return (
    <Layout>
      <div className="container my-2 d-flex justify-content-center">
        <div className="col-12 col-md-6 border rounder ">
          <FormEscoger forNewEscoger={false} formData={formData} />
        </div>
      </div>
    </Layout>
  );
};

export default EditPuesto;
