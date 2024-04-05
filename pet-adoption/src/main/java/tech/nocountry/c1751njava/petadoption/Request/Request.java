package tech.nocountry.c1751njava.petadoption.Request;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.nocountry.c1751njava.petadoption.Form.Form;
import tech.nocountry.c1751njava.petadoption.Pet.Pet;
import tech.nocountry.c1751njava.petadoption.User.User;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "AM_REQUEST")
public class Request {
    private String id;
    private User user;
    private Pet pet;
    private Form form;
}
