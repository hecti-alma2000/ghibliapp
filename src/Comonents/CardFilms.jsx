// import PropTypes from 'prop-types';

import { useNavigate } from "react-router-dom";


export const CardFilms = ({id, anio,  nombre,  img }) => {
  const navegate= useNavigate();

  const manejarClick = ()=>{
    navegate(`/detallePeliculas/${nombre}`, {
      replace: true
    });
  };
  return (
    <div className="card animate__animated animate__fadeIn" style={{width: '18rem'}}>
      <img style={{height: '250px'}} src={`src/assets/${img}`} className="card-img-top" alt={`img ${id}`} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{`Año de estreno: ${anio}`}</p>
        <button onClick={ manejarClick }  className='btn btn-outline-secondary rounded-0'>Ver Detalles</button>
      </div>
    </div>
  )};