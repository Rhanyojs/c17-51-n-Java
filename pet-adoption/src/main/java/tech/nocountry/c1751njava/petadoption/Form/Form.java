package tech.nocountry.c1751njava.petadoption.Form;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.nocountry.c1751njava.petadoption.Question.Question;
import tech.nocountry.c1751njava.petadoption.Request.Request;
import tech.nocountry.c1751njava.petadoption.Request.State;

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

    @OneToOne(mappedBy = "form")
    private Request request;

    @OneToMany(mappedBy = "form", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<Question> questionList;

    @Enumerated(EnumType.STRING)
    @Column(name = "STATE")
    private State state;
}
