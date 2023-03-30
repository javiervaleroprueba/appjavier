import React, { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const FormEscoger = ({ formData, forNewEscoger = true }) => {
  const router = useRouter();

  const [form, setForm] = useState({
    numero: formData.numero,
    nombre: "",
    estado: "escogido",
    pago: "no",
    celular: formData.celular,
    chePago: formData.chePago,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (forNewEscoger) {
      postData(form);
    } else {
      putData(form);
    }
  };

  const putData = async (form) => {
    const { id } = router.query;
    try {
      const res = await fetch(`/api/rifa/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async (form) => {
    try {
      console.log(form);
      const res = await fetch("/api/rifa/escoger", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row  m-3 p-2">
          <div>
            <label className="form-label">Número:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Numero"
              aria-label="Number"
              name="numero"
              value={form.numero}
              onChange={handleChange}
              disabled
            />
          </div>
          <div className="mt-2">
            <label className="form-label">Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              aria-label="Nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="mt-2">
            <label className="form-label">Celular:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Número de Celular... "
              aria-label="Nombre"
              name="celular"
              value={form.celular}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="text-center">
            Con # celular estaré en contacto para el pago o al nequi de la
            pagina principal..
          </div>

          <div className="d-flex mt-4">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="chePago"
                id="radioPago"
                value="Pago"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="radioPago">
                Pago
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="chePago"
                id="radioDebe"
                value="Debe"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="radioDebe">
                Debe
              </label>
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 ">
          <button className="btn btn-primary" type="submit">
            {forNewEscoger ? "Apartar Número" : "Comprar"}
          </button>
          <Link href={"/"}>
            <button className="btn btn-secondary col-12" type="button">
              Cancelar
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormEscoger;
