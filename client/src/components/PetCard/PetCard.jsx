import React, { useState } from "react";
import "./PetCard.scss";
import petImage from "../../assets/images/pet-image.jpg";
import petimage2 from "../../assets/images/pet-image-2.jpg";
import { Link } from "react-router-dom";

function PetCard() {
  return (
    <>
      <div className="card">
        <div className="containerImages">
          {/* <img src={petimage2} alt="" className="Image" />  */}
        </div>
        <div className="containerTitleDescipcion">
          <h1 className="title">Canela</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            deserunt dola
          </p>
          <Link to="/PetInformation" className="Button">
            Ver Detalles
          </Link>
        </div>
      </div>
    </>
  );
}

export default PetCard;
