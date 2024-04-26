package tech.nocountry.c1751njava.petadoption.Pet.service.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.nocountry.c1751njava.petadoption.Pet.Size;
import tech.nocountry.c1751njava.petadoption.User.dto.UserDto;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PetDTO {

    private String id;
    private UserDto user;
    public String name;
    private String description;
    private int age;
    private String location;
    private boolean isState;
    private String species;
    private String breed;
    private String gender;
    private Size size;

}
