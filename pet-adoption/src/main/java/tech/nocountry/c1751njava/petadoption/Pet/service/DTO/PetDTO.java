package tech.nocountry.c1751njava.petadoption.Pet.service.DTO;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.nocountry.c1751njava.petadoption.User.dto.UserDto;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PetDTO {

    private UserDto user;
    public String name;
    private String description;
    private int age;
    private String ubication;
    private boolean isState;
    private String species;
    private String breed;
}
