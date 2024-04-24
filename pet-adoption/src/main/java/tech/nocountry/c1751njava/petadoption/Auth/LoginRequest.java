package tech.nocountry.c1751njava.petadoption.Auth;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class LoginRequest {
    @NotBlank(message = "Se requiere el nombre de usuario")
    String username;

    @NotBlank(message = "Se requiere la contraseña")
    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    String password;
}
