package tech.nocountry.c1751njava.petadoption.Question.Services;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tech.nocountry.c1751njava.petadoption.EntityCRUDService;
import tech.nocountry.c1751njava.petadoption.Question.Dto.Mapper.QuestionMapper;
import tech.nocountry.c1751njava.petadoption.Question.Dto.QuestionDto;
import tech.nocountry.c1751njava.petadoption.Question.Model.Question;
import tech.nocountry.c1751njava.petadoption.Question.Repository.QuestionRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuestionService implements EntityCRUDService<Question, QuestionDto> {

    private final QuestionRepository questionRepository;

    @Override
    @Transactional
    public Question create(QuestionDto entity) {
        return questionRepository.save(QuestionMapper.toQuestion(entity));
    }

    @Transactional
    public List<Question> createAll(List<QuestionDto> entities) {
        List<Question> questionList = entities.stream()
                .map(QuestionMapper::toQuestion)
                .toList();
        return questionRepository.saveAll(questionList);
    }

    @Override
    @Transactional
    public Question update(QuestionDto entity, String id) {
        return null;
    }

    @Override
    @Transactional
    public void delete(String id) {

    }

    @Override
    public Optional<Question> getById(String id) {
        return Optional.empty();
    }

    @Override
    public List<Question> getAll() {
        return List.of();
    }

    @Transactional
    public List<Question> getAllByFormId(String formId) {
        return List.of();
    }

    @Override
    public List<Question> search(String field, String criteria) {
        return List.of();
    }

    @Override
    public boolean validate(QuestionDto entity) {
        return true;
    }
}
