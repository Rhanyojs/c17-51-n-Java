package tech.nocountry.c1751njava.petadoption.Question.Dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class QuestionDto {

    private String id;
    @NotBlank(message = "Question cannot be blank")
    private String question;
    @NotBlank(message = "Answer cannot be blank")
    private String answer;
    @NotBlank(message = "FormId cannot be blank")
    private String formId;

}
