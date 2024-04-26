package tech.nocountry.c1751njava.petadoption.Pet.service.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import tech.nocountry.c1751njava.petadoption.Pet.Size;

import java.util.Optional;

@Data
@Builder
@AllArgsConstructor
public class PetFilters {
    private Optional<String> species;
    private Optional<String> breed;
    private Optional<String> ubication;
    private Optional<String> gender;
    private Optional<Size> size;
    private Optional<Integer> age;
}
