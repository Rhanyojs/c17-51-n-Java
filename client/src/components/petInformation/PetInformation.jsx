import React from "react";
import "./PetInformation.scss";

import petImage from "../../assets/images/pet-image.jpg";

function petInformation() {
  return (
    <>
      <div className="petContainer">
        <div className="nameContainer">
          <h1 className="Name">Canela</h1>
          <div className="NameSpace"></div>
        </div>
        <div className="petInfo">
          <div className="leftContent">
            <div className="imgContainer">
              {/* <h1>imagen</h1> */}
              <img src={petImage} alt="" className="Image" />
            </div>
          </div>
          <div className="rightContent">
            <div className="petDataContainer">
              <div>Cargando....</div>
            </div>
            <div className="buttonContainer">
              <button className="Button">Formulario de adopción</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default petInformation;
