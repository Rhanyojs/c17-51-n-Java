package tech.nocountry.c1751njava.petadoption.Pet.repository.dao;

import org.springframework.data.domain.Page;
import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;

import java.util.List;
import java.util.Optional;

public interface IPetDao {

    Pet savePet(Pet pet);

    void deletePet(String id);

    Optional<Pet> findPetById(String id);

    List<Pet> findAllPets();
    List<Pet> findPetBySpeciesAndBreedAndAge(Optional<String> species, Optional<String> breed, Optional<Integer> age);




}
