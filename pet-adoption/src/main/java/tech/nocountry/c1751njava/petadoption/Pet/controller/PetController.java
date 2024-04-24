package tech.nocountry.c1751njava.petadoption.Pet.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.PetDTO;
import tech.nocountry.c1751njava.petadoption.Pet.service.PetService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    private final PetService petService;

    public PetController(PetService petService) {
        this.petService = petService;
    }

    @PostMapping()
    public ResponseEntity<String> savePet(@RequestBody PetDTO petDTO) {
        //Verificar como resolver el tema de verificaciones
        //Implementacion Temporal
        if (petDTO.getDescription().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        final String petId = petService.savePet(petDTO);
        return new ResponseEntity<>(petId, HttpStatus.CREATED);
    }

    @DeleteMapping("/{petId}") //la variable de la URL debe coincidir con el parametro
    public ResponseEntity<String> deletePetById(@PathVariable String petId) {
        Optional<PetDTO> optionalPet = petService.findPetById(petId);
        if (optionalPet.isPresent()) {
            return ResponseEntity.ok("Register deleted");
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/{petId}")
    public ResponseEntity<PetDTO> findPetById(@PathVariable String petId) {
        Optional<PetDTO> optionalPetDTO = petService.findPetById(petId);
        return optionalPetDTO.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<PetDTO>> findAllPets() {
        List<PetDTO> petDTOList = petService.findAllPets();
        return ResponseEntity.ok(petDTOList);
    }

    @GetMapping("/search")
    public ResponseEntity<List<PetDTO>> findPetBySpeciesAndBreedAndAge(@RequestParam(name = "species", required = false) String species,
                                                                       @RequestParam(name = "breed", required = false) String breed,
                                                                       @RequestParam(name = "age", required = false) Integer age) {
        List<PetDTO> petDTOList = petService.findPetBySpeciesAndBreedAndAge(Optional.ofNullable(species), Optional.ofNullable(breed), Optional.ofNullable(age));
        return ResponseEntity.ok(petDTOList);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updatePet(@PathVariable String id, @RequestBody PetDTO petDTO) {
        Optional<PetDTO> optionalPetDTO = petService.findPetById(id);
        if (optionalPetDTO.isPresent()) {
            petService.savePet(petDTO);
            return ResponseEntity.ok("Register updated");
        }
        return ResponseEntity.badRequest().build();
    }


}
