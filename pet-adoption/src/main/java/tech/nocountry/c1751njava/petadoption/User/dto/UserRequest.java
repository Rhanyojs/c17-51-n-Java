package tech.nocountry.c1751njava.petadoption.User.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserRequest {

    @NotBlank(message = "Username is mandatory")
    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
    private String username;

    @NotBlank(message = "Password is mandatory")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;

    @NotBlank(message = "First name is mandatory")
    @Size(max = 100, message = "First name must be a maximum of 100 characters")
    @Pattern(regexp = "^[^0-9]+$", message = "First name cannot contain numbers")
    private String firstName;

    @NotBlank(message = "Last name is mandatory")
    @Size(max = 100, message = "Last name must be a maximum of 100 characters")
    @Pattern(regexp = "^[^0-9]+$", message = "First name cannot contain numbers")
    private String lastName;

    @Size(max = 255, message = "Location must be a maximum of 100 characters")
    private String location;

}
