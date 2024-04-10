package tech.nocountry.c1751njava.petadoption.Shelter.Services;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import tech.nocountry.c1751njava.petadoption.EntityCRUDService;
import tech.nocountry.c1751njava.petadoption.Shelter.Model.Shelter;
import tech.nocountry.c1751njava.petadoption.User.Model.User;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ShelterServicesImpl implements EntityCRUDService<Shelter> {

    @Override
    public Shelter create(Shelter entity) {
        return null;
    }

    @Override
    public Optional<Shelter> read(Long id) {
        return Optional.empty();
    }

    @Override
    public Shelter update(Shelter entity) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public List<Shelter> getAll() {
        return List.of();
    }

    @Override
    public List<Shelter> search(String criteria) {
        return List.of();
    }

    @Override
    public boolean validate(Shelter entity) {
        return false;
    }
}
