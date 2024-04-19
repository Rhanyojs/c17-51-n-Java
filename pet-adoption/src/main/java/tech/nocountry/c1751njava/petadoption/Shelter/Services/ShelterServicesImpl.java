package tech.nocountry.c1751njava.petadoption.Shelter.Services;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tech.nocountry.c1751njava.petadoption.EntityCRUDService;
import tech.nocountry.c1751njava.petadoption.User.Model.User;
import tech.nocountry.c1751njava.petadoption.User.Repository.UserRepository;
import tech.nocountry.c1751njava.petadoption.User.Role;
import tech.nocountry.c1751njava.petadoption.User.Services.UserService;
import tech.nocountry.c1751njava.petadoption.User.dto.UserDto;
import tech.nocountry.c1751njava.petadoption.User.dto.UserRequest;
import tech.nocountry.c1751njava.petadoption.User.dto.mapper.UserMapper;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShelterServicesImpl implements EntityCRUDService<UserDto, UserRequest> {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public UserDto create(UserRequest entity) {
        if (validate(entity)) {
            throw new IllegalArgumentException("User is not valid");
        }
        User user = userMapper.toUser(entity);
        user.setRole(Role.SHELTER);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userMapper.userToDto(userRepository.save(user));
    }

    @Override
    public Optional<UserDto> getById(String id) {
        return userService.getById(id);
    }

    @Override
    public UserDto update(UserRequest entity, String id) {
        return userService.update(entity, id);
    }

    @Override
    public void delete(String id) throws DataAccessException {
        userService.delete(id);
    }

    @Override
    public List<UserDto> getAll() {
        return userService.getAll();
    }

    @Override
    public List<UserDto> search(String field, String criteria) {
        return List.of();
    }

    @Override
    public boolean validate(UserRequest entity) {
        return entity == null;
    }

}
