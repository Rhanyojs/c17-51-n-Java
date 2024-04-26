package tech.nocountry.c1751njava.petadoption.Pet.repository.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;
import tech.nocountry.c1751njava.petadoption.Pet.repository.PetRepository;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.PetFilters;

import java.util.List;
import java.util.Optional;

@Component
public class PetDAOImpl implements IPetDao {

    @Autowired
    private PetRepository petRepository;

    @Override
    public Pet savePet(Pet pet) {
        petRepository.save(pet);
        return pet;
    }

    @Override
    public void deletePet(String id) {
        petRepository.deleteById(id);
    }

    @Override
    public Optional<Pet> findPetById(String id) {
        return petRepository.findById(id);
    }

    @Override
    public List<Pet> findAllPets() {
        return petRepository.findAll();
    }

    @Override
    public List<Pet> findPetByFilters(PetFilters petFilters) {
        return petRepository.findPetByFilters(
                petFilters.getSpecies().orElse(null), petFilters.getBreed().orElse(null),
                petFilters.getUbication().orElse(null), petFilters.getGender().orElse(null),
                petFilters.getSize().orElse(null), petFilters.getAge().orElse(null));
    }


}
