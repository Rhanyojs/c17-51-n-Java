package tech.nocountry.c1751njava.petadoption.Question.Controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.c1751njava.petadoption.Question.Dto.QuestionDto;
import tech.nocountry.c1751njava.petadoption.Question.Model.Question;
import tech.nocountry.c1751njava.petadoption.Question.Services.QuestionService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/question")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping
    public ResponseEntity<List<Question>> getAll() {
        List<Question> questions = questionService.getAll();
        return new ResponseEntity<>(questions, HttpStatus.OK);
    }

    @GetMapping("/form/{formId}")
    public ResponseEntity<List<Question>> getAllByFormId(@PathVariable String formId) {
        List<Question> questions = questionService.getAllByFormId(formId);
        return new ResponseEntity<>(questions, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Question> create(@RequestBody @Valid QuestionDto question) {
        Question createdQuestion = questionService.create(question);
        return new ResponseEntity<>(createdQuestion, HttpStatus.CREATED);
    }

    @PostMapping("/all")
    public ResponseEntity<List<Question>> createAll(@RequestBody @Valid List<QuestionDto> questions) {
        List<Question> createdQuestions = questionService.createAll(questions);
        return new ResponseEntity<>(createdQuestions, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Question> update(@RequestBody QuestionDto question, @PathVariable String id) {
        Question updatedQuestion = questionService.update(question, id);
        return new ResponseEntity<>(updatedQuestion, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        questionService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
