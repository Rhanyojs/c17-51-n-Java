package tech.nocountry.c1751njava.petadoption.Pet;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.nocountry.c1751njava.petadoption.Request.Request;
import tech.nocountry.c1751njava.petadoption.User.User;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "AM_PETS")
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "ID")
    private String id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "AGE")
    private int age;
    @Column(name = "UBICATION")
    private String ubication;
    @Column(name = "STATE")
    private boolean isState;
    @ManyToOne(fetch = FetchType.LAZY)
    //chequear si es el nombre correcto
    @JoinColumn(name = "REQUEST_ID")
    private List<Request> requestList = new ArrayList<>();
}
