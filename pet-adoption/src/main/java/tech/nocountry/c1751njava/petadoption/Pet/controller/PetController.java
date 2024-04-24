package tech.nocountry.c1751njava.petadoption.Pet.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tech.nocountry.c1751njava.petadoption.ImageUpload.Model.Image;
import tech.nocountry.c1751njava.petadoption.ImageUpload.Services.ImageUploadService;
import tech.nocountry.c1751njava.petadoption.Pet.service.DTO.PetDTO;
import tech.nocountry.c1751njava.petadoption.Pet.service.PetService;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
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

    @PostMapping
    ResponseEntity<?> savePet(@RequestBody PetDTO petDTO) throws URISyntaxException {
        //Verificar como resolver el tema de verificaciones
        //Implementacion Temporal
        if (petDTO.getDescription().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        final String petId = petService.savePet(petDTO);
        return ResponseEntity.created(new URI("/api/pets/" + petId)).build();
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

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updatePet(@PathVariable String id, @RequestBody PetDTO petDTO) {
        Optional<PetDTO> optionalPetDTO = petService.findPetById(id);
        if (optionalPetDTO.isPresent()) {
            petService.savePet(petDTO);
            return ResponseEntity.ok("Register updated");
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/upload")
    public ResponseEntity<Image> uploadImage(@RequestParam("image") MultipartFile file) throws IOException {
        Image image = imageUploadService.uploadImage(file);
        return ResponseEntity.ok(image);
    }


}
