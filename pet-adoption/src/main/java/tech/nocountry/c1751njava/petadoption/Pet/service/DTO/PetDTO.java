package tech.nocountry.c1751njava.petadoption.Pet.service.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.nocountry.c1751njava.petadoption.User.Model.User;
import tech.nocountry.c1751njava.petadoption.Request.Request;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PetDTO {
    private User user;
    private String description;
    private int age;
    private String ubication;
    private boolean isState;
    private Request request;

}
