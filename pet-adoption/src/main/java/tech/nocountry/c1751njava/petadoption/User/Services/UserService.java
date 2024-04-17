package tech.nocountry.c1751njava.petadoption.User.Services;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tech.nocountry.c1751njava.petadoption.EntityCRUDService;
import tech.nocountry.c1751njava.petadoption.User.Model.User;
import tech.nocountry.c1751njava.petadoption.User.Repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements EntityCRUDService<User> {

    private final UserRepository userRepository;

    @Override
    @Transactional
    public User create(User entity) throws IllegalArgumentException {
        if (!validate(entity)) {
            throw new IllegalArgumentException("User is not valid");
        }
        return userRepository.save(entity);
    }

    @Override
    public Optional<User> getById(String id) {
        return userRepository.findById(id);
    }

    @Override
    public User update(User entity) throws RuntimeException {
        if (!validate(entity)) {
            throw new IllegalArgumentException("User is not valid");
        }
        checkUserExists(entity.getId());

        return userRepository.save(entity);
    }

    @Override
    public void delete(String id) throws EntityNotFoundException {
        checkUserExists(id);
        userRepository.deleteById(id);
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public List<User> search(String field, String criteria) {
        return List.of();
    }

    @Override
    public boolean validate(User entity) {
        return entity != null;
    }

    private void checkUserExists(String id) {
        if (!userRepository.existsById(id)) {
            throw new EntityNotFoundException("User not found");
        }
    }
}
