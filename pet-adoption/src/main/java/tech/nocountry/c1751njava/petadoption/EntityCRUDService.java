package tech.nocountry.c1751njava.petadoption;

import java.util.List;
import java.util.Optional;

public interface EntityCRUDService<T> {
    T create(T entity);

    Optional<T> read(Long id);

    T update(T entity);

    void delete(Long id);

    List<T> getAll();

    List<T> search(String criteria);

    boolean validate(T entity);
}
