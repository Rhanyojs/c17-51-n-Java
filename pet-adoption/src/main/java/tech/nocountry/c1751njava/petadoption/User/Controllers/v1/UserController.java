package tech.nocountry.c1751njava.petadoption.User.Controllers.v1;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @GetMapping("/")
    public ResponseEntity<String> getAllUser(){
        return ResponseEntity.ok("Todo Nice");
    }
}
