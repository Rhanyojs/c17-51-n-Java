import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Details.scss";
import PetCard from "../PetCard/PetCard";


function Mascotas() {
  // Utilizamos el hook useState para definir un estado local llamado petsData,
  // que almacenará los datos de las mascotas.
  // Inicializamos este estado como un array vacío.
  const [petsData, setPetsData] = useState([]);

  // Utilizamos el hook useEffect para realizar una solicitud HTTP a la URL "http://localhost:8080/api/pets"
  // y obtener los datos de las mascotas.

  useEffect(() => {
    // La función fetchData realiza esta solicitud utilizando Axios y maneja la respuesta.
    // Si la solicitud es exitosa, actualiza el estado petsData con los datos de mascotas obtenidos.
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/pets");
        console.log("Data de mascotas:", response.data);
        setPetsData(response.data);
      } catch (error) {
        // Si la solicitud falla, muestra un eroor en un console.log .
        console.error("Error al obtener datos de mascotas:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="containerDetails">
      <div className="TitleContainer">
        <h1 className="title">¿Estás buscando un nuevo amigo?</h1>
        <h3 className="Subtitle">Todos ellos están listos para su adopción</h3>
      </div>
      {/* Recordemos con un .map el array de petsData. Por cada mascota creamos un
      componente PetCard pasando el objeto como una propiedad pet y por último,
      estableciendo una clave única key para identificar y pintar la mascota
      según su ID. */}
      <div className="containerCard">
        {petsData.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}



export default Mascotas;

