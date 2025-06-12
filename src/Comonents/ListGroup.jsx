
import '../stylesheet/listGroup.css';


export const ListGroup = () => {
  return (
    <div className="container">
      <h2>Otros Colaboradores Clave</h2>
      <ul class="list-group">
      <li class="list-group-item">
        <h3>Koji Hoshino</h3>
        <p><span>Rol:</span> Koji Hoshino es conocido por su trabajo en la industria del cine, especialmente en Studio Ghibli, donde ha ocupado varios roles importantes. </p>
        <p><span>Contribuciones:</span> Ha sido presidente de Studio Ghibli y ha jugado un papel crucial en la gestión y promoción de las películas del estudio. Su liderazgo ha ayudado a mantener la calidad y la reputación de las producciones de Ghibli a nivel mundial.</p>
      </li>
      <li class="list-group-item">
        <h3>Kiyofumi Nakajima</h3>
        <p><span>Rol:</span> Kiyofumi Nakajima también ha estado asociado con Studio Ghibli, desempeñando roles administrativos clave.</p>
        <p><span>Contribuciones:</span> Ha sido director del Museo Ghibli en Mitaka, Tokio. Bajo su dirección, el museo ha continuado siendo un destino popular para los fanáticos de Ghibli, ofreciendo exposiciones únicas y experiencias inmersivas relacionadas con las películas del estudio.</p>
      </li>
    </ul>
    </div>
  )
}
