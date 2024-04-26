package tech.nocountry.c1751njava.petadoption.Auth;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class RegisterRequest {
    @NotNull
    @NotEmpty
    private String username;

    @NotNull(message = "Se requiere la contraseña")
    @NotEmpty(message = "La contraseña no puede estar vacía")
    @Size(min = 8, max = 20, message = "La contraseña debe tener entre 8 y 20 caracteres")
    private String password;

    @NotNull(message = "El correo electrónico es obligatorio")
    @NotEmpty(message = "El correo electrónico no puede estar vacío")
    @Size(min = 3, max = 100, message = "El correo electrónico debe tener entre 3 y 100 caracteres")
    @Pattern(regexp = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$",
            message = "El formato del correo electrónico es inválido")
    private String email;

    @NotNull(message = "Se requiere el nombre")
    @NotEmpty(message = "El nombre no puede estar vacío")
    private String firstname;

    @NotNull(message = "Se requiere el apellido")
    @NotEmpty(message = "El apellido no puede estar vacío")
    private String lastname;

    @NotNull(message = "Se requiere la ubicación")
    @NotEmpty(message = "La ubicación no puede estar vacía")
    private String location;

    private String role;

}
