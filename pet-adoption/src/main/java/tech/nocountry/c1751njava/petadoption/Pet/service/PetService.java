package tech.nocountry.c1751njava.petadoption.Pet.service;

import org.springframework.beans.factory.annotation.Autowired;
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
    public List<PetDTO> findPetBySpecies(String species) {
        return petDao.findPetBySpecies(species).stream().map(mapper::map).toList();
    }

    @Override
    public List<PetDTO> findPetByBreed(String breed) {
        return petDao.findPetByBreed(breed).stream().map(mapper::map).toList();
    }

    @Override
    public List<PetDTO> findPetByStateTrue() {
        return petDao.findPetByStateTrue().stream().map(mapper::map).toList();
    }

    @Override
    public List<PetDTO> findPetByStateFalse() {
        return petDao.findPetByStateFalse().stream().map(mapper::map).toList();
    }
}
