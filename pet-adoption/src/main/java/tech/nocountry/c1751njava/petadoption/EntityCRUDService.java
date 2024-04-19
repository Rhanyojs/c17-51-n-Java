package tech.nocountry.c1751njava.petadoption;

import java.util.List;
import java.util.Optional;

public interface EntityCRUDService<T, S> {

    T create(S entity);

    T update(S entity, String id);

    void delete(String id);

    Optional<T> getById(String id);

    List<T> getAll();

    List<T> search(String field, String criteria);

    boolean validate(S entity);
}
