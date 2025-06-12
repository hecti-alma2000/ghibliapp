import { useNavigate, Navigate, useParams } from "react-router-dom";
import { getFilmByCardTitle } from "../helpers/getFilmByCardTitle";

export const CardFilmInfo = () => {
  const { nombre } = useParams();
  const navigate = useNavigate();
  const film = getFilmByCardTitle(nombre);
  const manejarRegreso = () => {
    navigate("/peliculas");
  };
  if (!film) {
    return <Navigate to="/peliculas" />;
  }

  const imgPath = `/src/assets/${film.img}`;
  return (
    <div className="d-flex justify-content-center w-100">
      <div
        className="card mb-3 animate__animated animate__bounce"
        style={{ maxWidth: "800px", width: "100%", margin: "2rem auto" }}
      >
        <div className="row g-0">
          <div className="col-md-4 col-12">
            <img
              style={{
                maxHeight: "450px",
                width: "100%",
                objectFit: "cover",
              }}
              src={imgPath}
              className="img-fluid rounded-start"
              alt={`imágen ${film.id}`}
            />
          </div>
          <div className="col-md-8 col-12 d-flex flex-column">
            <div className="card-body">
              <h3 className="card-title">{film.nombre}</h3>
              <h5 className="card-text">{`Año de estreno: ${film.anio}`}</h5>
              <h5 className="card-text">{`Director: ${film.director}`}</h5>
              <h6 className="card-text">
                {film.premios !== "" ? `Premios: ${film.premios}` : null}
              </h6>
              <p className="card-text">
                <small>{film.sinopsis}</small>
              </p>
              <div className="mt-auto">
                <button
                  onClick={manejarRegreso}
                  className="btn btn-outline-secondary rounded-0"
                >
                  Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
