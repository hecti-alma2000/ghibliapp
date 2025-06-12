

export const Acordeon = () => {
  return (
    <div className='container'>
      <h2>Influencia de su obra</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Influencia en la Industria de la Animación
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <ol>
          <li> <b>Innovación Técnica y Artística:</b> Studio Ghibli es conocido por su atención al detalle y su enfoque artesanal en la animación. Han establecido nuevos estándares en la calidad de la animación, combinando técnicas tradicionales con innovaciones modernas.</li>
          <li> <b>Narrativas Complejas y Temas Profundos:</b> Las películas de Ghibli a menudo exploran temas complejos como la ecología, la guerra, la espiritualidad y el crecimiento personal. Esto ha demostrado que la animación puede ser un medio para contar historias profundas y significativas, no solo para niños sino también para adultos.</li>
          <li> <b>Inspiración para Otros Creadores:</b> Muchos animadores y cineastas han citado a Studio Ghibli como una gran influencia en su trabajo. La calidad y el éxito de las películas de Ghibli han inspirado a estudios de animación en todo el mundo a elevar sus propios estándares.</li>
        </ol>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Influencia en la Cultura Popular
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <ol>
          <li> <b>Iconos Culturales:</b> Personajes como Totoro y Ponyo se han convertido en iconos culturales, reconocidos no solo en Japón sino en todo el mundo3.</li>
          <li> <b>Inspiración para Otros Creadores:</b> La influencia de Ghibli se puede ver en el trabajo de muchos cineastas y animadores, incluyendo a Guillermo del Toro y su película El laberinto del fauno3.</li>
          <li> <b>Merchandising y Turismo:</b> La popularidad de las películas de Ghibli ha llevado a una amplia gama de productos de merchandising y ha convertido lugares como el Museo Ghibli en destinos turísticos populares4</li>
        </ol>
      </div>
    </div>
  </div>
  
</div>
    </div>
  )
}
