import { ImportanciaCeadores } from "../Comonents/ImportanciaCeadores";
import { CreadoresCardInfo } from "../Comonents/CreadoresCardInfo";
import { ListGroup } from "../Comonents/ListGroup";
import { PremiosAlert } from "../Comonents/PremiosAlert";
import { Acordeon } from "../Comonents/Acordeon";

export const Creador = () => {
  return (
    <div className="container py-4 animate__animated animate__fadeIn">
      <ImportanciaCeadores />
      <CreadoresCardInfo />
      <ListGroup />
      <PremiosAlert />
      <Acordeon />
    </div>
  );
};
