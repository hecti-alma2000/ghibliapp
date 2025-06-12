import { CardsList } from "../Comonents/CardsList";
import "../stylesheet/peliculas.css";

export const Peliculas = () => {
  return (
    <>
      <div className="contenedor mt-4 mb-4">
        <div className="row g-3">
          <CardsList />
        </div>
      </div>
    </>
  );
};
