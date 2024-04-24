package tech.nocountry.c1751njava.petadoption.User.Services;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tech.nocountry.c1751njava.petadoption.AbstractEntityService;
import tech.nocountry.c1751njava.petadoption.EntityCRUDService;
import tech.nocountry.c1751njava.petadoption.User.Model.User;
import tech.nocountry.c1751njava.petadoption.User.Repository.UserRepository;
import tech.nocountry.c1751njava.petadoption.User.dto.UserDto;
import tech.nocountry.c1751njava.petadoption.User.dto.UserRequest;
import tech.nocountry.c1751njava.petadoption.User.dto.mapper.UserMapper;
import tech.nocountry.c1751njava.petadoption.exception.custom.ValidationError;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService extends AbstractEntityService<User, UserRequest> implements EntityCRUDService<UserDto, UserRequest> {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public UserDto create(UserRequest entity) throws IllegalArgumentException {
        if (validate(entity)) {
            throw new IllegalArgumentException("User is not valid");
        }
        User user = userMapper.toUser(entity);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userMapper.userToDto(userRepository.save(user));
    }

    @Override
    @Transactional
    public UserDto update(UserRequest entity, String id) throws RuntimeException {
        if (validate(entity)) {
            throw new IllegalArgumentException("User is not valid");
        }
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        updateFromDto(existingUser, entity);
        return userMapper.userToDto(userRepository.save(existingUser));
    }

    @Override
    public void delete(String id) throws EntityNotFoundException {
        checkUserExists(id);
        userRepository.deleteById(id);
    }

    @Override
    public Optional<UserDto> getById(String id) {
        return userRepository.findById(id).map(userMapper::userToDto);
    }

    @Override
    public List<UserDto> getAll() {
        return userRepository.findAll().stream().map(userMapper::userToDto).toList();
    }

    @Override
    public boolean validate(UserRequest entity) {
        return entity == null;
    }

    private void checkUserExists(String id) {
        if (!userRepository.existsById(id)) {
            throw new EntityNotFoundException("User not found");
        }
    }

    @Override
    protected void updateFromDto(User entity, UserRequest dto) throws ValidationError {
        if (dto.getUsername() != null) {
            entity.setUsername(dto.getUsername());
        }
        if (dto.getPassword() != null) {
            entity.setPassword(passwordEncoder.encode(dto.getPassword()));
        }
        if (dto.getFirstName() != null) {
            entity.setFirstName(dto.getFirstName());
        }
        if (dto.getLastName() != null) {
            entity.setLastName(dto.getLastName());
        }
        if (dto.getLocation() != null) {
            entity.setLocation(dto.getLocation());
        }
    }
}
