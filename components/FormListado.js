import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

import { useRouter } from "next/router";

const FormListado = ({ formData, forNewEscoger = true }) => {
  const router = useRouter();

  const [form, setForm] = useState({
    numero: formData.numero,
    nombre: formData.nombre,
    estado: formData.estado,
    pago: formData.pago,
    celular: formData.celular,
  });

  useEffect(() => {
    setForm({
      numero: formData.numero,
      nombre: formData.nombre,
      estado: formData.estado,
      pago: formData.pago,
      celular: formData.celular,
    });
  }, [formData]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    //console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putData()
  };

  const putData = async () => {
    const { id } = router.query;
    try {
      await axios.put(`/api/listado/${id}`, form);
      router.push("/editar/editar");
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

          <div className="mt-2">
            <label htmlFor="pago" className="form-label">
              Pago:
            </label>
            <select
              className="form-select"
              aria-label="Estado"
              name="pago"
              value={form.pago}
              onChange={handleChange}
            >
              <option defaultValue=""></option>
              <option value="no">NO</option>
              <option value="si">SI</option>
            </select>
          </div>
        
          <div className="mt-2">
            <label htmlFor="Estado" className="form-label">
              Estado:
            </label>
            <select
              className="form-select"
              aria-label="Estado"
              name="estado"
              value={form.estado}
              onChange={handleChange}
            >
              <option defaultValue=""></option>
              <option value="ocupado">Ocupado</option>
              <option value="escogido">Escogido</option>
              <option value="libre">Libre</option>
            </select>
          </div>


        </div>
        <div className="d-grid gap-2 ">
          <button className="btn btn-primary" type="submit">
            {forNewEscoger ? "Apartar Número" : "Editar Número"}
          </button>
          <Link href={"/editar/editar"}>
            <button className="btn btn-secondary col-12" type="button">
              Cancelar
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormListado;
