import React from "react";
import "./Details.scss";
import PetCard from "../PetCard/PetCard";

function Mascotas() {
  return (
    <div className="containerDetails">
      <div className="TitleContainer">
        <h1 className="title">¿Estás buscando un nuevo amigo?</h1>
        <h3 className="Subtitle">Todos ellos están listos para su adopción</h3>
      </div>
      <div className="containerCard">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </div>
    </div>
  );
}

export default Mascotas;
