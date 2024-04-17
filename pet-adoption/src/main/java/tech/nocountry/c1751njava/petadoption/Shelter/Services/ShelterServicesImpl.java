package tech.nocountry.c1751njava.petadoption.Shelter.Services;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import tech.nocountry.c1751njava.petadoption.EntityCRUDService;
import tech.nocountry.c1751njava.petadoption.User.Model.User;
import tech.nocountry.c1751njava.petadoption.User.Repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class ShelterServicesImpl implements EntityCRUDService<User> {

    private final UserRepository shelterRepository;

    @Override
    public User create(User entity) {
        if (validate(entity)) throw new IllegalArgumentException();
        try {
            return shelterRepository.save(entity);
        } catch (Exception e) {
            throw new EntityExistsException(e.getMessage());
        }
    }

    @Override
    public Optional<User> getById(String id) {
        return Optional.empty();
    }

    @Override
    public User update(User entity) {
        exists(entity.getId());
        try {
            return shelterRepository.save(entity);
        } catch (DataAccessException e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public void delete(String id) {
        exists(id);
        try {
            shelterRepository.deleteById(id);
        } catch (DataAccessException e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public List<User> getAll() {
        return shelterRepository.findAll();
    }

    @Override
    public List<User> search(String criteria) {
        return List.of();
    }

    @Override
    public boolean validate(User entity) {
        return entity.getUsername() != null && !entity.getUsername().isEmpty() &&
                entity.getPassword() != null;
    }

    public boolean exists(String id) throws EntityNotFoundException {
        if (!shelterRepository.existsById(id)) {
            throw new EntityNotFoundException("Usuario no encontrado");
        }
        return true;
    }

}
