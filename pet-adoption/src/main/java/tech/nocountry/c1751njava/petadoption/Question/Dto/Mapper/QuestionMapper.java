package tech.nocountry.c1751njava.petadoption.Question.Dto.Mapper;

import tech.nocountry.c1751njava.petadoption.Question.Dto.QuestionDto;
import tech.nocountry.c1751njava.petadoption.Question.Model.Question;

public class QuestionMapper {

    private QuestionMapper() {}

    public static QuestionDto toDto(Question question) {
        return QuestionDto.builder()
                .id(question.getId())
                .question(question.getBodyQuestion().trim())
                .answer(question.getAnswer().trim())
                .formId(question.getForm().getId())
                .build();
    }

    public static Question toQuestion(QuestionDto questionDto) {
        return Question.builder()
                .id(questionDto.getId())
                .bodyQuestion(questionDto.getQuestion().trim())
                .answer(questionDto.getAnswer().trim())
                .build();
    }
}
