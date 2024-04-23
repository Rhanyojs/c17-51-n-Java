package tech.nocountry.c1751njava.petadoption.Pet.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.PetDTO;
import tech.nocountry.c1751njava.petadoption.Pet.service.PetService;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    private final PetService petService;

    public PetController(PetService petService) {
        this.petService = petService;
    }

    @PostMapping
    public ResponseEntity<String> savePet(@RequestBody PetDTO petDTO) throws URISyntaxException {
        //Verificar como resolver el tema de verificaciones
        //Implementacion Temporal
        if (petDTO.getDescription().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        final String petId = petService.savePet(petDTO);
        return ResponseEntity.created(new URI("/api/pets/" + petId)).build();
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

    @GetMapping("/{species}")
    public ResponseEntity<List<PetDTO>> findPetsBySpecies(@PathVariable String species) {
        List<PetDTO> petDTOList = petService.findPetBySpecies(species);
        return ResponseEntity.ok(petDTOList);
    }

    @GetMapping("/{breed}")
    public ResponseEntity<List<PetDTO>> findPetsByBreed(@PathVariable String breed) {
        List<PetDTO> petDTOList = petService.findPetByBreed(breed);
        return ResponseEntity.ok(petDTOList);
    }

    @GetMapping()
    public ResponseEntity<List<PetDTO>> findPetsByStatusTrue() {
        List<PetDTO> petDTOList = petService.findPetByStateTrue();
        return ResponseEntity.ok(petDTOList);
    }

    @GetMapping()
    public ResponseEntity<List<PetDTO>> findPetsByStatusFalse() {
        List<PetDTO> petDTOList = petService.findPetByStateFalse();
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
