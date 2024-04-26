package tech.nocountry.c1751njava.petadoption.User.dto.mapper;

import org.springframework.stereotype.Component;
import tech.nocountry.c1751njava.petadoption.User.Model.User;
import tech.nocountry.c1751njava.petadoption.User.Role;
import tech.nocountry.c1751njava.petadoption.User.dto.UserDto;
import tech.nocountry.c1751njava.petadoption.User.dto.UserRequest;

@Component
public class UserMapper {

    public UserDto userToDto(User user) {
        return UserDto.builder()
                .id(user.getId())
                .email(user.getEmail())
                .username(user.getUsername())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .role(user.getRole())
                .location(user.getLocation())
                .isBanned(user.getIsBanned())
                .pets(user.getPetList())
                .build();
    }

    public User dtoToUser(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getId());
        user.setEmail(userDto.getEmail());
        user.setUsername(userDto.getUsername());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setRole(userDto.getRole());
        user.setLocation(userDto.getLocation());
        user.setIsBanned(userDto.getIsBanned());
        user.setPetList(userDto.getPets());
        return user;
    }

    public User toUser(UserRequest userRequest) {
        User user = new User();
        user.setUsername(userRequest.getUsername());
        user.setEmail(userRequest.getEmail());
        user.setPassword(userRequest.getPassword());
        user.setFirstName(userRequest.getFirstName());
        user.setLastName(userRequest.getLastName());
        user.setRole(Role.USER);
        user.setLocation(userRequest.getLocation());
        return user;
    }

}
