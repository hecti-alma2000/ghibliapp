import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../stylesheet/navLink.css";

export const Navbar = () => {
  const navegate = useNavigate();
  const location = useLocation();
  const offcanvasRef = useRef(null);

  // Cierra el offcanvas automáticamente al cambiar de ruta
  useEffect(() => {
    if (offcanvasRef.current) {
      const offcanvasEl = offcanvasRef.current;
      if (window.bootstrap && window.bootstrap.Offcanvas) {
        const bsOffcanvas =
          window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
        bsOffcanvas.hide();
      }
    }
  }, [location]);

  const manejarClick = () => {
    navegate("/");
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top offcanvas-navbar"
      style={{ minHeight: "70px", zIndex: 100 }}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold fs-3" to="/">
          GhibliApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          ref={offcanvasRef}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menú
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-2">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/peliculas">
                  Películas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/creador">
                  Acerca de los creadores
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
