import { CardFilmInfo } from "../Comonents/CardFilmInfo";

export const DetallePeliculas = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="mb-4">Detalles de la película</h1>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <CardFilmInfo />
      </div>
    </div>
  );
};
