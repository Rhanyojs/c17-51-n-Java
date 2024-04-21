package tech.nocountry.c1751njava.petadoption.Request;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.nocountry.c1751njava.petadoption.Form.Form;
import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;

import java.util.List;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "AM_REQUEST")
public class Request {
    @Id
    @Column(name = "ID", updatable = false, nullable = false)
    private String id = UUID.randomUUID().toString();

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
