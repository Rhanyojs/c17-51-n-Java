package tech.nocountry.c1751njava.petadoption.Pet.repository.dao;

import tech.nocountry.c1751njava.petadoption.Pet.Pet;

import java.util.List;
import java.util.Optional;

public interface IPetDao {

    Pet savePet(Pet pet);
    void deletePet(String id);
    Optional<Pet> findPetById(String id);
    List<Pet> findAllPets();


}
