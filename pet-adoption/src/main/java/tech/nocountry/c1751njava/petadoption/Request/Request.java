package tech.nocountry.c1751njava.petadoption.Request;

import jakarta.persistence.*;
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
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "ID")
    private String id;
    /*
      CHEQUEAR RELACIONADO
            */
    @OneToOne
    private User user;
    @OneToMany(mappedBy = "id",
    cascade = CascadeType.ALL,
    fetch = FetchType.LAZY,
    orphanRemoval = true)
    @Column(name = "PET")
    private Pet pet;
    @OneToOne
    @Column(name = "FORM")
    private Form form;
}
