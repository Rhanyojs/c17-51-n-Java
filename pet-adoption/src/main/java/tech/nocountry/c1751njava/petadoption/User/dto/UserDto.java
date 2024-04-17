package tech.nocountry.c1751njava.petadoption.User.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserDto {
    private String id;

    @NotBlank(message = "Username is mandatory")
    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
    private String username;

    @NotBlank(message = "First name is mandatory")
    @Size(max = 100, message = "First name must be a maximum of 100 characters")
    private String firstName;

    @NotBlank(message = "Last name is mandatory")
    @Size(max = 100, message = "Last name must be a maximum of 100 characters")
    private String lastName;

    private String role;

    @Size(max = 100, message = "Location must be a maximum of 100 characters")
    private String location;

    private Boolean isBanned = false;

}
