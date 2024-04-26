package tech.nocountry.c1751njava.petadoption.Pet.service.DTO.mapper;

import org.springframework.stereotype.Service;
import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.PetDTO;
import tech.nocountry.c1751njava.petadoption.User.dto.mapper.UserMapper;

@Service
public class PetMapper implements IMapper<Pet, PetDTO> {

    @Override
    public PetDTO map(Pet in) {
        PetDTO petDTO = new PetDTO();
        petDTO.setId(in.getId());
        petDTO.setUser(new UserMapper().userToDto(in.getUser()));
        petDTO.setName(in.getName());
        petDTO.setDescription(in.getDescription());
        petDTO.setAge(in.getAge());
        petDTO.setLocation(in.getLocation());
        petDTO.setState(in.isState());
        petDTO.setSpecies(in.getSpecies());
        petDTO.setBreed(in.getBreed());
        petDTO.setGender(in.getGender());
        petDTO.setSize(in.getSize());
        return petDTO;
    }

    public Pet dtoToPet(PetDTO petDTO) {
        Pet pet = new Pet();
        pet.setId(petDTO.getId());
        pet.setUser(new UserMapper().dtoToUser(petDTO.getUser()));
        pet.setName(petDTO.getName());
        pet.setDescription(petDTO.getDescription());
        pet.setAge(petDTO.getAge());
        pet.setLocation(petDTO.getLocation());
        pet.setState(petDTO.isState());
        pet.setSpecies(petDTO.getSpecies());
        pet.setBreed(petDTO.getBreed());
        pet.setGender(petDTO.getGender());
        pet.setSize(petDTO.getSize());
        return pet;
    }

}
