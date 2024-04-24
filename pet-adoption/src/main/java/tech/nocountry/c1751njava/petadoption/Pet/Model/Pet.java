package tech.nocountry.c1751njava.petadoption.Pet.Model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.nocountry.c1751njava.petadoption.ImageUpload.Model.Image;
import tech.nocountry.c1751njava.petadoption.Request.Request;
import tech.nocountry.c1751njava.petadoption.User.Model.User;

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
    @Column(name = "NAME")
    private String name;
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
    @Column(name = "SPECIES")
    private String species;
    @Column(name = "BREED")
    private String breed;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "REQUEST_ID")
    private Request request;
    @JsonManagedReference
    @OneToMany(mappedBy = "pet")
    private List<Image> images;

}
