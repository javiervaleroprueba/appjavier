import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
//import axios from "axios";

function Login() {
  const router = useRouter();

  const [error, setError] = useState(null);

  const [usuario, setUsuario] = useState({
    user: "",
    password: "",
  });

  const { user, password } = usuario;

  const iniciarSesion = async () => {
    const data = {
      user: usuario.user,
      password: usuario.password,
    };
    try {
      const response = await fetch("/api/auth/login", 
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      alert("Datos ingresados son erroneos....");
      console.error(error);
      // setError(error.response.data.error); // Defina la función setError y modifique según sea necesario
    }
  };

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user && password) {
      setError(null);
      iniciarSesion();
    } else {
      setError("Los campos son obligatorios");
    }
  };

  return (
    <>
    <Layout>
      <div className="container">
        <div className="fs-1 text-center mb-10">Iniciar sesión</div>

        <div className=" card ">
          <div className="card-body align-items-center">
            <form onSubmit={onSubmit}>
              <div className="col justify-content-center mt-5 ">
                <div className="d-grid gap-2 col-12 col-md-6 mx-auto">
                  <label htmlFor="User" className="form-label">
                    Usuario
                  </label>
                  <input
                    id="user"
                    name="user"
                    type="text"
                    autoComplete="off"
                    required
                    value={user.toUpperCase()}
                    onChange={onChange}
                    className="form-control"
                    style={{textTransform: 'uppercase'}}                  
                   
                  />
                </div>

                <div className="d-grid gap-2 col-12 col-md-6 mx-auto">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    required
                    value={password}
                    onChange={onChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col justify-content-center p-2 mt-5">
                <div className="p-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block d-grid gap-2 col-12 col-md-6 mx-auto"
                  >
                    Ingresar
                  </button>
                </div>
                <div className="p-3">
                  <Link href={"/"}>
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg btn-block d-grid gap-2 col-12 col-md-6 mx-auto"
                    >
                      Inicio
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}

export default Login;
