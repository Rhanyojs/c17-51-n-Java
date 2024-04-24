import React from "react";
import "./Details.scss";
import PetCard from "../PetCard/PetCard";

function Mascotas() {
  //aqui podemos cambiara el objeto por una peticion get con axios que pueda traer la data de una api
  const petsData = [
    {
      id: "1",
      name: "Luna",
      user: null,
      description: "Labrador Retriever de color negro",
      age: 3,
      ubication: "Ciudad de México",
      isState: true,
      request: null,
    },
    {
      id: "2",
      name: "Simba",
      user: null,
      description: "Gato doméstico naranja y blanco",
      age: 2,
      ubication: "Guadalajara",
      isState: true,
      request: null,
    },
    {
      id: "3",
      name: "Rocky",
      user: null,
      description: "Bulldog francés de color blanco y marrón",
      age: 4,
      ubication: "Monterrey",
      isState: false,
      request: null,
    },
    {
      id: "4",
      name: "Bella",
      user: null,
      description: "Border Collie negro y blanco",
      age: 1,
      ubication: "Puebla",
      isState: true,
      request: null,
    },
    {
      id: "5",
      name: "Max",
      user: null,
      description: "Perro mestizo de tamaño mediano, color negro",
      age: 5,
      ubication: "Tijuana",
      isState: true,
      request: null,
    },
    {
      id: "6",
      name: "Luna",
      user: null,
      description: "Gato siamés de ojos azules",
      age: 2,
      ubication: "Ciudad de México",
      isState: true,
      request: null,
    },
    {
      id: "7",
      name: "Coco",
      user: null,
      description: "Caniche toy blanco",
      age: 6,
      ubication: "Guadalajara",
      isState: true,
      request: null,
    },
    {
      id: "8",
      name: "Toby",
      user: null,
      description: "Golden Retriever dorado",
      age: 3,
      ubication: "Monterrey",
      isState: false,
      request: null,
    },
    {
      id: "9",
      name: "Mia",
      user: null,
      description: "Yorkshire Terrier negro y dorado",
      age: 2,
      ubication: "Puebla",
      isState: true,
      request: null,
    },
    {
      id: "10",
      name: "Jack",
      user: null,
      description: "Pastor Alemán negro y marrón",
      age: 4,
      ubication: "Tijuana",
      isState: true,
      request: null,
    },
  ];

  return (
    <div className="containerDetails">
      <div className="TitleContainer">
        <h1 className="title">¿Estás buscando un nuevo amigo?</h1>
        <h3 className="Subtitle">Todos ellos están listos para su adopción</h3>
      </div>
      <div className="containerCard">
        {petsData.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default Mascotas;
