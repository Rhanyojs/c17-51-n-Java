package tech.nocountry.c1751njava.petadoption.Pet.service.DTO.mapper;

import tech.nocountry.c1751njava.petadoption.Pet.Pet;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.PetDTO;

public class PetToPetDTO implements IMapper<Pet, PetDTO> {
    @Override
    public PetDTO map(Pet in) {
        PetDTO petDTO = new PetDTO();
        petDTO.setUser(in.getUser());
        petDTO.setDescription(in.getDescription());
        petDTO.setAge(in.getAge());
        petDTO.setUbication(in.getUbication());
        petDTO.setState(in.isState());
        petDTO.setRequest(in.getRequest());
        return petDTO;
    }


}
