package tech.nocountry.c1751njava.petadoption;

import java.util.List;
import java.util.Optional;

public interface EntityCRUDService<T> {
    T create(T entity);

    Optional<T> read(String id);

    T update(T entity);

    void delete(String id);

    List<T> getAll();

    List<T> search(String criteria);

    boolean validate(T entity);
}
