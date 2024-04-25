package tech.nocountry.c1751njava.petadoption.Pet.repository.dao;

import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.PetFilters;

import java.util.List;
import java.util.Optional;

public interface IPetDao {

    Pet savePet(Pet pet);

    void deletePet(String id);

    Optional<Pet> findPetById(String id);

    List<Pet> findAllPets();

    List<Pet> findPetByFilters(PetFilters petFilters);

}
