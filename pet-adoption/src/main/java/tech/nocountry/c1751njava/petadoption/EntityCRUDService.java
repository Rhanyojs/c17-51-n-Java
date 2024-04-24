package tech.nocountry.c1751njava.petadoption;

import tech.nocountry.c1751njava.petadoption.exception.custom.ValidationError;

import java.util.List;
import java.util.Optional;

public interface EntityCRUDService<T, S> {

    T create(S entity);

    T update(S entity, String id);

    void delete(String id);

    Optional<T> getById(String id);

    List<T> getAll();

    boolean validate(S entity);
}
