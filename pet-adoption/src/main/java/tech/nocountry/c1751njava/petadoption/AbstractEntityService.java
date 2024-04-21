package tech.nocountry.c1751njava.petadoption;

public abstract class AbstractEntityService {

    protected void validateId(String id) {
        if (id == null || id.isEmpty()) {
            throw new IllegalArgumentException("Id cannot be empty");
        }
    }

    protected abstract <T, S> void updateFromDto(T entity, S dto);
}
