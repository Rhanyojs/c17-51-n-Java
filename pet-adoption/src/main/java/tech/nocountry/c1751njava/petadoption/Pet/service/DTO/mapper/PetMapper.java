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
        petDTO.setUser(new UserMapper().userToDto(in.getUser()));
        petDTO.setDescription(in.getDescription());
        petDTO.setAge(in.getAge());
        petDTO.setUbication(in.getUbication());
        petDTO.setState(in.isState());
        return petDTO;
    }


}
