package tech.nocountry.c1751njava.petadoption.User.Controllers.v1;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.nocountry.c1751njava.petadoption.User.Services.UserService;
import tech.nocountry.c1751njava.petadoption.User.dto.UserDto;
import tech.nocountry.c1751njava.petadoption.User.dto.UserRequest;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/user")
    public ResponseEntity<String> getAllUser() {
        return ResponseEntity.ok("Todo Nice");
    }

    @GetMapping()
    public ResponseEntity<?> createUser(@RequestBody @Valid UserRequest user) {
        try {
            UserDto newUser = userService.create(user);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
