package tech.nocountry.c1751njava.petadoption.Pet.service.interfaces;

import tech.nocountry.c1751njava.petadoption.Pet.Pet;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.PetDTO;

import java.util.List;
import java.util.Optional;

public interface IPetService {
    String savePet(PetDTO petDTO);
    void deletePet(String id);
    Optional<PetDTO> findPetById(String id);
    List<PetDTO> findAllPets();


}
