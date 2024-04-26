import PetCard from "../PetCard/PetCard";


function filtradoPerros(){
    return pets.filter(pet => pet.description.toLowerCase().includes('perro'));
}

function filtradoGatos(pets) {
    return pets.filter(pet => pet.description.toLowerCase().includes('gato'));
}