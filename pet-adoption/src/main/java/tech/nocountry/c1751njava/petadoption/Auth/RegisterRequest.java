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

    @NotNull(message = "Se requiere la contraseña")
    @NotEmpty(message = "La contraseña no puede estar vacía")
    @Min(value = 8, message = "La contraseña debe tener al menos 8 caracteres")
    @Max(value = 20, message = "La contraseña no puede tener más de 20 caracteres")
    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    String password;

    @NotNull(message = "Se requiere el nombre")
    @NotEmpty(message = "El nombre no puede estar vacío")
    String firstname;

    @NotNull(message = "Se requiere el apellido")
    @NotEmpty(message = "El apellido no puede estar vacío")
    String lastname;

    @NotNull(message = "Se requiere la ubicación")
    @NotEmpty(message = "La ubicación no puede estar vacía")
    String location;
}
