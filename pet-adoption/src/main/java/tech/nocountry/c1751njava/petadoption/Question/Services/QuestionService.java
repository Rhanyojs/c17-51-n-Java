package tech.nocountry.c1751njava.petadoption.Question.Services;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tech.nocountry.c1751njava.petadoption.AbstractEntityService;
import tech.nocountry.c1751njava.petadoption.EntityCRUDService;
import tech.nocountry.c1751njava.petadoption.Question.Dto.Mapper.QuestionMapper;
import tech.nocountry.c1751njava.petadoption.Question.Dto.QuestionDto;
import tech.nocountry.c1751njava.petadoption.Question.Model.Question;
import tech.nocountry.c1751njava.petadoption.Question.Repository.QuestionRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuestionService extends AbstractEntityService implements EntityCRUDService<Question, QuestionDto> {

    private final QuestionRepository questionRepository;

    @Override
    @Transactional
    public Question create(QuestionDto entity) {
        if (!validate(entity)) {
            throw new IllegalArgumentException("Question is not valid");
        }
        return questionRepository.save(QuestionMapper.toQuestion(entity));
    }

    @Transactional
    public List<Question> createAll(List<QuestionDto> entities) {
        List<Question> questionList = entities.stream()
                .filter(this::validate)
                .map(QuestionMapper::toQuestion)
                .toList();
        return questionRepository.saveAll(questionList);
    }

    @Override
    @Transactional
    public Question update(QuestionDto entity, String id) {
        validateId(id);
        Question question = getById(id)
                .orElseThrow(() -> new EntityNotFoundException("Question not found"));

        updateFromDto(question, entity);

        return questionRepository.save(question);
    }

    @Override
    @Transactional
    public void delete(String id) {
        validateId(id);
        if (!questionRepository.existsById(id)) {
            throw new EntityNotFoundException("Question not found");
        }
        questionRepository.deleteById(id);
    }

    @Override
    public Optional<Question> getById(String id) {
        validateId(id);
        return questionRepository.findById(id);
    }

    @Override
    public List<Question> getAll() {
        return questionRepository.findAll();
    }

    @Transactional
    public List<Question> getAllByFormId(String formId) {
        validateId(formId);
        return questionRepository.findAllByFormId(formId);
    }

    @Override
    public boolean validate(QuestionDto entity) {
        return entity.getQuestion() != null && !entity.getQuestion().isBlank() && entity.getQuestion().length() <= 255;
    }


    @Override
    protected <T, S> void updateFromDto(T entity, S dto) {
        if (dto instanceof QuestionDto questionDto && questionDto.getQuestion() != null) {
            ((Question) entity).setBodyQuestion(questionDto.getQuestion().trim());
        }
    }
}
