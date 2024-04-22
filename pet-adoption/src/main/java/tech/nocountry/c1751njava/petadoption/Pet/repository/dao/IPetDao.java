package tech.nocountry.c1751njava.petadoption.Pet.Repository.dao;

import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;

import java.util.List;
import java.util.Optional;

public interface IPetDao {

    Pet savePet(Pet pet);

    void deletePet(String id);

    Optional<Pet> findPetById(String id);

    List<Pet> findAllPets();


}
