export const CreadoresCard = ({
  id,
  name,
  bibligrafia,
  contribuciones,
  estiloTema,
  img,
}) => {
  const pathImg = `src/assets/creadores/${img}.jpg`;
  return (
    <div className="container">
      <div
        className="card mb-3 m-auto animate__animated animate__fadeIn"
        style={{ maxWidth: "900px" }}
      >
        <div className="row g-0 flex-column flex-md-row">
          <div className="col-md-5 col-12">
            <img
              src={pathImg}
              className="img-fluid rounded-start w-100"
              alt={`img ${id}`}
              style={{ objectFit: "cover", maxHeight: "350px" }}
            />
          </div>
          <div className="col-md-7 col-12">
            <div className="card-body">
              <h3 style={{ textAlign: "center" }} className="card-title">
                <b>{name}</b>
              </h3>
              <p className="card-text">
                <b>Bibliografía: </b>
                {bibligrafia}
              </p>
              <p className="card-text">
                <b>Contribuciones: </b>
                {contribuciones}
              </p>
              <p className="card-text">
                <b>Estilo de animación y Tema de sus obras: </b>
                {estiloTema}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
