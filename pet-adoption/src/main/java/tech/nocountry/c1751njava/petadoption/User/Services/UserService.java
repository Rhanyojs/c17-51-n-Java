package tech.nocountry.c1751njava.petadoption.User.Services;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tech.nocountry.c1751njava.petadoption.EntityCRUDService;
import tech.nocountry.c1751njava.petadoption.User.Model.User;
import tech.nocountry.c1751njava.petadoption.User.Repository.UserRepository;
import tech.nocountry.c1751njava.petadoption.User.dto.UserDto;
import tech.nocountry.c1751njava.petadoption.User.dto.UserRequest;
import tech.nocountry.c1751njava.petadoption.User.dto.mapper.UserMapper;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements EntityCRUDService<UserDto, UserRequest> {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    @Transactional
    public UserDto create(UserRequest entity) throws IllegalArgumentException {
        if (!validate(entity)) {
            throw new IllegalArgumentException("User is not valid");
        }
        User user = userMapper.toUser(entity);
        return userMapper.userToDto(userRepository.save(user));
    }

    @Override
    public Optional<UserDto> getById(String id) {
        return userRepository.findById(id).map(userMapper::userToDto);
    }

    @Override
    @Transactional
    public UserDto update(UserRequest entity, String id) throws RuntimeException {
        if (!validate(entity)) {
            throw new IllegalArgumentException("User is not valid");
        }
        checkUserExists(id);
        User user = userMapper.toUser(entity);
        return userMapper.userToDto(userRepository.save(user));
    }

    @Override
    public void delete(String id) throws EntityNotFoundException {
        checkUserExists(id);
        userRepository.deleteById(id);
    }

    @Override
    public List<UserDto> getAll() {
        return userRepository.findAll().stream().map(userMapper::userToDto).toList();
    }

    @Override
    public List<UserDto> search(String field, String criteria) {
        return List.of();
    }

    @Override
    public boolean validate(UserRequest entity) {
        return entity != null;
    }

    private void checkUserExists(String id) {
        if (!userRepository.existsById(id)) {
            throw new EntityNotFoundException("User not found");
        }
    }
}
