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
    @JsonManagedReference
    private UserDto user;
    private String description;
    private int age;
    private String ubication;
    private boolean isState;

}
