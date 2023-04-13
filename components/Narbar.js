import { useRouter } from "next/router";
import Link from "next/link";

const Narbar = () => {
  const router = useRouter();

  const isLoggedIn =
    typeof document !== "undefined" && document.cookie.includes("myRifaToken");

  const handleLogoutClick = async () => {
    // Hacer una solicitud a la API de logout
    const response = await fetch("/api/auth/logout");
    //console.log(response.ok)
    const salir = response.ok
    if (salir === true) {
      // Si la respuesta es exitosa, redireccionar al usuario a la página de inicio de sesión
      alert("usuario desactivado");
      document.cookie = "myRifaToken=; max-age=0";
      router.push("/");
    } else {
      // Si la respuesta no es exitosa, mostrar un mensaje de error
      console.error("Error al cerrar sesión");
      alert("Se esta finalizada la sección")
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link href="/" legacyBehavior>
            <a className="navbar-brand">Javier Valero</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" legacyBehavior>
                  <a className="nav-link active">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/editar/editar" legacyBehavior>
                  <a className="nav-link active">Editar</a>
                </Link>
              </li>
              {isLoggedIn ? (
                <li className="nav-item">
                  <Link href="/auth/login" legacyBehavior>
                    <a className="nav-link active">Login</a>
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link active" onClick={handleLogoutClick}>
                    Salir
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Narbar;
