package tech.nocountry.c1751njava.petadoption.Shelter.Controllers.v1;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.c1751njava.petadoption.Shelter.Services.ShelterServicesImpl;
import tech.nocountry.c1751njava.petadoption.User.Model.User;

@RestController
@RequestMapping(value = "/api/v1/shelter")
public class ShelterController {

    private final ShelterServicesImpl shelterServices;

    ShelterController(ShelterServicesImpl services) {
        this.shelterServices = services;
    }

    @GetMapping()
    public ResponseEntity<?> getAll() {
        try {
            return new ResponseEntity<>(this.shelterServices.getAll(), HttpStatus.OK);
        } catch (DataAccessException e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping()
    public ResponseEntity<?> createShelter(@RequestBody User user) {
        try {
            return new ResponseEntity<>(shelterServices.create(user), HttpStatus.CREATED);
        } catch (DataAccessException e) {
            return new ResponseEntity<>("Error en la creación", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping()
    public ResponseEntity<?> updateShelter(@RequestBody User user) {
        try {
            return new ResponseEntity<>(shelterServices.update(user), HttpStatus.CREATED);
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

    @ExceptionHandler({ DataAccessException.class })
    public ResponseEntity<?> handleException(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
