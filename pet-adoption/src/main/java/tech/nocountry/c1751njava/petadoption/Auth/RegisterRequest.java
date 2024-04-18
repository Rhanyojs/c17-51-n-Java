package tech.nocountry.c1751njava.petadoption.Auth;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
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
    String username;

    @NotNull(message = "El campo 'password' es requerido")
    @NotEmpty(message = "El campo 'password' no puede estar vacío")

    @Min(value = 8, message = "La contraseña debe tener al menos 8 caracteres")
    @Max(value = 20, message = "La contraseña no puede tener más de 20 caracteres")
    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    String password;

    @NotNull(message = "El campo 'firstname' es requerido")
    @NotEmpty(message = "El campo 'firstname' no puede estar vacío")
    String firstname;

    @NotNull(message = "El campo 'lastname' es requerido")
    @NotEmpty(message = "El campo 'lastname' no puede estar vacío")
    String lastname;

    @NotNull(message = "El campo 'location' es requerido")
    @NotEmpty(message = "El campo 'location' no puede estar vacío")
    String location;
}
