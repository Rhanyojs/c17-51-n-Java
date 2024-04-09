import React from "react";
import "./Details.scss";
import PetCard from "../PetCard/PetCard";

function Details() {
  return (
    <div className="containerDetails">
      <div className="containerCard">
        <PetCard />
      </div>
    </div>
  );
}

export default Details;
