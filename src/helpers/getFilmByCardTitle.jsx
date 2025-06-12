
import { list } from "./list";



export const getFilmByCardTitle = (nombre = '') => {
  return list.find(film=> film.nombre === nombre);
}
