package tech.nocountry.c1751njava.petadoption.Question.Dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class QuestionRequest {

    @NotBlank(message = "Question cannot be empty")
    @Size(min = 5, max = 200, message = "Question must be between 5 and 200 characters")
    private String question;

    @Size(min = 5, max = 200, message = "Answer must be between 5 and 200 characters")
    private String answer;

    @NotBlank(message = "IdForm cannot be empty")
    private String idForm;
}
