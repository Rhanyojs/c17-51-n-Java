package tech.nocountry.c1751njava.petadoption.Question;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.nocountry.c1751njava.petadoption.Form.Form;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "AM_QUESTION")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "ID")
    private String id;
    @Column(name = "BODYQUESTION")
    private String bodyQuestion;
    @Column(name = "ANSER")
    private String answer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FORM_ID")
    private Form form;
}
