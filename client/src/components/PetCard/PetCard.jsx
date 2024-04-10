import React from "react";
import "./PetCard.scss";
import petImage from "../../assets/images/pet-image.jpg";

function PetCard() {
  return (
    <>
      <div className="card">
        <div className="containerImages"></div>
        <div className="containerTitleDescipcion">
          <h1 className="title">Canela</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            deserunt dola
          </p>
          <button className="Button">Ver Detalles</button>
        </div>
      </div>
    </>
  );
}

export default PetCard;
