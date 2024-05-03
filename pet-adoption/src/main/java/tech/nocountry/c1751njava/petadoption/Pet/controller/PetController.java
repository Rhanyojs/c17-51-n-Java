package tech.nocountry.c1751njava.petadoption.Pet.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tech.nocountry.c1751njava.petadoption.ImageUpload.Services.ImageUploadService;
import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;
import tech.nocountry.c1751njava.petadoption.Pet.Size;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.PetDTO;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.PetFilters;
import tech.nocountry.c1751njava.petadoption.Pet.service.PetService;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    private final PetService petService;
    private final ImageUploadService imageUploadService;

    public PetController(PetService petService, ImageUploadService imageUploadService) {
        this.petService = petService;
        this.imageUploadService = imageUploadService;
    }

    @PostMapping()
    public ResponseEntity<String> savePet(@RequestBody PetDTO petDTO) {
        // Verificar como resolver el tema de verificaciones
        // Implementación Temporal
        if (petDTO.getDescription().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        final Pet petId = petService.savePet(petDTO);
        return new ResponseEntity<>(petId.getId(), HttpStatus.CREATED);
    }

    @PostMapping("/image")
    public ResponseEntity<String> savePetImage(@RequestBody PetDTO petDTO, @RequestParam("image") MultipartFile file) throws IOException {
        if (petDTO.getDescription().isEmpty() || file.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        final Pet pet = petService.savePet(petDTO);

        imageUploadService.uploadImage(file, pet);
        return new ResponseEntity<>(pet.getId(), HttpStatus.CREATED);
    }

    @DeleteMapping("/{petId}")
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
    public ResponseEntity<List<PetDTO>> findPetBySpeciesAndBreedAndAge(
            @RequestParam(name = "species", required = false) String species,
            @RequestParam(name = "breed", required = false) String breed,
            @RequestParam(name = "location", required = false) String location,
            @RequestParam(name = "gender", required = false) String gender,
            @RequestParam(name = "size", required = false) String size,
            @RequestParam(name = "age", required = false) Integer age) {

        PetFilters filters = PetFilters.builder()
                .species(Optional.ofNullable(species))
                .breed(Optional.ofNullable(breed))
                .ubication(Optional.ofNullable(location))
                .gender(Optional.ofNullable(gender))
                .size(Optional.of(Size.valueOf(size.toUpperCase()))).age(Optional.ofNullable(age)).build();

        List<PetDTO> petDTOList = petService.findPetByFilters(filters);

        return ResponseEntity.ok(petDTOList);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updatePet(@PathVariable String id, @RequestBody PetDTO petDTO) {
        Optional<PetDTO> optionalPetDTO = petService.findPetById(id);
        if (optionalPetDTO.isPresent()) {
            petDTO.setId(id);
            petService.savePet(petDTO);
            return ResponseEntity.ok("Register updated");
        }
        return ResponseEntity.badRequest().build();
    }
}
