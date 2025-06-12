import '../stylesheet/listGroup.css';

export const PremiosAlert = () => {
  return (
    <div className='container'>
    
      <div class="alert " role="alert">
      <h2>Algunos de los premios más destacados que han recibido los creadores de Studio Ghibli</h2>
      <hr />
        <h3>Hayao Miyazaki</h3>
        <ul>
          <li>Oscar Honorífico (2014): Por su impacto en la animación y el cine.</li>
          <li>Premio de la Academia a la Mejor Película de Animación (2003): Por “El Viaje de Chihiro”.</li>
          <li>León de Oro a la Trayectoria (2005): En el Festival de Cine de Venecia.</li>
        </ul>
        <hr />
        <h3>Isao Takahata</h3>
        <ul>
          <li>Premio Annie por su Contribución a la Animación: Reconocimiento a su carrera y aportes al cine de animación.</li>
          <li>Premio de la Academia de Cine de Japón a la Mejor Película de Animación (2014): Por “El Cuento de la Princesa Kaguya”.</li>
        </ul>
      </div>
    </div>
  )
}
