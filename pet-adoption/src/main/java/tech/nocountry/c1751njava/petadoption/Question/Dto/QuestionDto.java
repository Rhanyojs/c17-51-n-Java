package tech.nocountry.c1751njava.petadoption.Question.Dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class QuestionDto {

    private String id;

    private String question;

    private String answer;

    private String formId;

}
