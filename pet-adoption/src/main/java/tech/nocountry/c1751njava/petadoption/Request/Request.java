package tech.nocountry.c1751njava.petadoption.Request;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.nocountry.c1751njava.petadoption.Form.Form;
import tech.nocountry.c1751njava.petadoption.Pet.Pet;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "AM_REQUEST")
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // or GenerationType.UUID if using UUID
    @Column(name = "ID")
    private String id;

    @OneToOne
    @JoinColumn(name = "FORM_ID")
    private Form form;

    @OneToMany(mappedBy = "request",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            orphanRemoval = true)
    private List<Pet> pets;

    @Enumerated(EnumType.STRING)
    @Column(name = "STATE")
    private State state;


}
