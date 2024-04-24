package tech.nocountry.c1751njava.petadoption.Pet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;
import tech.nocountry.c1751njava.petadoption.Pet.repository.dao.IPetDao;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.PetDTO;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.mapper.PetMapper;
import tech.nocountry.c1751njava.petadoption.Pet.service.interfaces.IPetService;

import java.util.List;
import java.util.Optional;

@Service
public class PetService implements IPetService {

    private final IPetDao petDao;
    private final PetMapper mapper;

    @Autowired
    public PetService(IPetDao petDao, PetMapper petMapperService) {
        this.petDao = petDao;
        this.mapper = petMapperService;
    }

    @Override
    public String savePet(PetDTO petDto) {
        final Pet pet = mapper.dtoToPet(petDto);
        return petDao.savePet(pet).getId();
    }

    @Override
    public void deletePet(String id) {
        petDao.deletePet(id);
    }

    @Override
    public Optional<PetDTO> findPetById(String id) {
        return petDao.findPetById(id).map(mapper::map);
    }

    @Override
    public List<PetDTO> findAllPets() {
        return petDao.findAllPets().stream().map(mapper::map).toList();
    }

    @Override
    public List<PetDTO> findPetBySpeciesAndBreedAndAge(Optional<String> species, Optional<String> breed, Optional<Integer> age) {
        //Page pageable
        return petDao.findPetBySpeciesAndBreedAndAge(species, breed, age).stream().map(mapper::map).toList();
    }

}
