import { NavLink } from "react-router-dom";
import "../stylesheet/footer.css";
export const Footer = () => {
  return (
    <footer
      className="footer-custom bg-dark text-light d-flex align-items-center mt-auto py-3 border-top border-warning"
      style={{
        background: "linear-gradient(90deg, #2a5298 0%, #1e3c72 100%)",
        borderTop: "4px solid #ffd700",
      }}
    >
      <div className="container">
        <div className="row gy-3 align-items-center">
          <div className="col-12 col-md-4 text-center text-md-start mb-2 mb-md-0">
            <h5 className="text-warning">
              <strong>GhibliApp</strong>
            </h5>
            <p className="small mb-0">
              Página de información sobre el popular estudio de animación
              Ghibli, con el fin de dar visibilidad a sus obras.
            </p>
          </div>
          <div className="col-12 col-md-4 text-center mb-2 mb-md-0">
            <h5 className="text-warning">Enlaces</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <NavLink
                  className="nav-link text-light d-inline-block"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link text-light d-inline-block"
                  to="/peliculas"
                >
                  Películas
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link text-light d-inline-block"
                  to="/creador"
                >
                  Acerca de los creadores
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 text-center text-md-end">
            <p className="mb-0 small">
              © 2025 <span className="text-warning">GhibliApp</span>. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
