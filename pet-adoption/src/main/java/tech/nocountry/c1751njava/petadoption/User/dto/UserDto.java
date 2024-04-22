package tech.nocountry.c1751njava.petadoption.User.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;
import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;
import tech.nocountry.c1751njava.petadoption.User.Role;

import java.util.List;

@Data
@Builder
public class UserDto {
    private String id;

    private String username;

    private String firstName;

    private String lastName;

    private Role role;

    private String location;

    private Boolean isBanned;

    @JsonBackReference
    private List<Pet> pets;
}
