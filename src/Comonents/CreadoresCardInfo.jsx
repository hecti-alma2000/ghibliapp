import { CreadoresCard } from "./CreadoresCard";
import { creadores } from "../helpers/creadores";

export const CreadoresCardInfo = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      {
        creadores.map (creador =>(
          <div key={creador.id}> <CreadoresCard name={creador.name} bibligrafia={creador.bibliografia} contribuciones={creador.contribuciones} estiloTema={creador.estiloTema} img={creador.img} /></div>
        )) 
      }
    </div>
  )
}
