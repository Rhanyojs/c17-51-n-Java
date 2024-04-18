package tech.nocountry.c1751njava.petadoption.Shelter.Controllers.v1;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.c1751njava.petadoption.Shelter.Services.ShelterServicesImpl;
import tech.nocountry.c1751njava.petadoption.User.dto.UserDto;
import tech.nocountry.c1751njava.petadoption.User.dto.UserRequest;

@RestController
@RequestMapping(value = "/api/v1/shelter")
@RequiredArgsConstructor
public class ShelterController {

    private final ShelterServicesImpl shelterServices;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping()
    public ResponseEntity<?> getAll() {
        try {
            return new ResponseEntity<>(this.shelterServices.getAll(), HttpStatus.OK);
        } catch (DataAccessException e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping()
    public ResponseEntity<?> createShelter(@RequestBody @Valid UserRequest user) {
        try {
            return new ResponseEntity<>(shelterServices.create(user), HttpStatus.CREATED);
        } catch (DataAccessException e) {
            return new ResponseEntity<>("Error en la creación", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateShelter(@RequestBody @Valid UserRequest user, @PathVariable String id) {
        try {
            UserDto userDto = shelterServices.update(user, id);
            return new ResponseEntity<>(userDto, HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>("No se encontró el usuario", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteShelter(@PathVariable String id) {
        try {
            shelterServices.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>("No se encontró el usuario", HttpStatus.NOT_FOUND);
        }
    }


}
