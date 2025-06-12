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
        <div className="row gy-3">
          <div className="col-12 col-md-3">
            <h5 className="text-warning">
              <strong>GhibliApp</strong>
            </h5>
            <p className="small">
              Página de información sobre el popular estudio de animación
              Ghibli, con el fin de dar visibilidad a sus obras.
            </p>
          </div>
          <div className="col-12 col-md-3">
            <h5 className="text-warning">Enlaces</h5>
            <ul className="list-unstyled">
              <NavLink className="nav-link text-light" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-link text-light" to="/peliculas">
                Películas
              </NavLink>
              <NavLink className="nav-link text-light" to="/creador">
                Acerca de los creadores
              </NavLink>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h5 className="text-warning">Contacto</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:info@ghibliapp.com" className="text-light">
                  hector@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-light">
                  +53 590076413
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 d-flex align-items-center">
            <p className="mb-0 small">
              © 2024 <span className="text-warning">GhibliApp</span>. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
