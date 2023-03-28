import Link from "next/link";

const Narbar = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
            Javier Valero
          </a>
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
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Narbar;
