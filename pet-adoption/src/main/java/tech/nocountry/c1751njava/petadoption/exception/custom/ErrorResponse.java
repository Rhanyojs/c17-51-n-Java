package tech.nocountry.c1751njava.petadoption.exception.custom;

import lombok.Data;

import java.util.List;

@Data
public class ErrorResponse {
    private List<ValidationError> errors;

    public ErrorResponse(List<ValidationError> errors) {
        this.errors = errors;
    }
}
