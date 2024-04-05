package tech.nocountry.c1751njava.petadoption.Form;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.nocountry.c1751njava.petadoption.Pet.Pet;
import tech.nocountry.c1751njava.petadoption.Question.Question;
import tech.nocountry.c1751njava.petadoption.User.User;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "AM_FORM")
public class Form {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "ID")
    private String id;
    private User user;
    private List<Pet> petList = new ArrayList<>();
    private Question question;
    private State state;
}
