import React from "react";
import "./PetCard.scss";

function PetCard() {
  return (
    <>
      <div className="card">
        <div className="containerImages">
          <h1>images</h1>
        </div>
        <div className="containerTitleDescipcion">
          <h1 className="title">Title</h1>
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
