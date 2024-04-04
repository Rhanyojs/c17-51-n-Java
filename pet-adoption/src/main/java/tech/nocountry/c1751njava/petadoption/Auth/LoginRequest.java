package tech.nocountry.c1751njava.petadoption.Auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class LoginRequest {
    String username;
    String password;
}
