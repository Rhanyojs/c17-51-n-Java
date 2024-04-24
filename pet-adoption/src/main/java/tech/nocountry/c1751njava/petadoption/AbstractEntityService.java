package tech.nocountry.c1751njava.petadoption;

import tech.nocountry.c1751njava.petadoption.exception.custom.ValidationError;

public abstract class AbstractEntityService<T, S> {

    protected void validateId(String id) {
        if (id == null || id.isEmpty()) {
            throw new IllegalArgumentException("Id cannot be empty");
        }
    }

    protected abstract void updateFromDto(T entity, S dto) throws ValidationError;
}
