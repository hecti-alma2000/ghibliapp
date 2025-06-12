import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { list } from "../helpers/list";
import { CardFilms } from "./CardFilms";
import { SearchBar } from "./SearchBar";

export const CardsList = () => {
  const { nombre } = useParams();
  const [filteredFilms, setFilteredFilms] = useState(list);

  return (
    <>
      <div className="container d-flex" style={{ justifyContent: "center" }}>
        <div className="w-100" style={{ marginBottom: "2rem" }}>
          <SearchBar cards={list} setFilteredFilms={setFilteredFilms} />
        </div>
      </div>

      <div className="row">
        {filteredFilms.map((card) => (
          <div className="col-md-3 m-auto mt-5" key={card.id}>
            <CardFilms
              nombre={card.nombre}
              anio={card.anio}
              img={card.img}
              id={card.id}
            />
          </div>
        ))}
      </div>
    </>
  );
};
