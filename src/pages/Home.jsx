import { CaruselGhibli } from "../Comonents/CaruselGhibli";
import "../stylesheet/home.css";

export const Home = () => {
  return (
    <>
      <div className="container animate__animated animate__fadeIn ">
        <div className="row mt-5 g-4 align-items-center flex-lg-row flex-column-reverse">
          <div className="col-lg-5 col-12 mb-4 mb-lg-0">
            <CaruselGhibli />
          </div>
          <div className="col-lg-7 col-12">
            <h1>Estudios Ghibli</h1>
            <hr />

            <p className="text-muted">
              Studio Ghibli es un <span>estudio japonés de animación</span>,
              fundado en <span>1985</span> por <span>Hayao Miyazaki</span>,{" "}
              <span>Isao Takahata</span> y <span>Toshio Suzuki</span>. Es
              conocido por sus <span>largometrajes animados</span> y ha
              producido varios <span>cortometrajes</span>,{" "}
              <span>comerciales de televisión</span> y una{" "}
              <span>película para televisión</span>. Seis de sus películas se
              encuentran entre las{" "}
              <span>10 películas de anime más taquilleras</span> en Japón,
              siendo <span>El Viaje de Chihiro</span> la segunda más alta. Sus
              trabajos han ganado numerosos premios, incluyendo el{" "}
              <span>Premio de la Academia</span> y el <span>Oso de Oro</span>.
            </p>

            <p className="text-muted">
              Además de sus películas, Studio Ghibli ha creado un{" "}
              <span>museo</span> en Mitaka, Tokio, dedicado a sus obras y al
              proceso de animación. El museo ofrece{" "}
              <span>exposiciones interactivas</span>,{" "}
              <span>proyecciones exclusivas</span> y una{" "}
              <span>tienda de regalos</span> con productos únicos. Studio Ghibli
              también ha colaborado en <span>videojuegos</span>, como{" "}
              <span>Ni no Kuni</span>, y ha influido en numerosos{" "}
              <span>artistas y cineastas</span> a nivel mundial. Su estilo
              distintivo y su enfoque en <span>historias conmovedoras</span> y{" "}
              <span>personajes complejos</span> han dejado una{" "}
              <span>huella duradera</span> en la industria de la animación.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
