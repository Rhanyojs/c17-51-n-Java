package tech.nocountry.c1751njava.petadoption.Pet.service.interfaces;

import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.PetDTO;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.PetFilters;

import java.util.List;
import java.util.Optional;

public interface IPetService {
    Pet savePet(PetDTO petDTO);

    void deletePet(String id);

    Optional<PetDTO> findPetById(String id);

    List<PetDTO> findAllPets();

    List<PetDTO> findPetByFilters(PetFilters petFilters);


}
