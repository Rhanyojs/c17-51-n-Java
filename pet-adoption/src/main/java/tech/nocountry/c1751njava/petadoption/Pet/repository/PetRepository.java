package tech.nocountry.c1751njava.petadoption.Pet.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;

import java.util.List;
import java.util.Optional;

@Repository
public interface PetRepository extends JpaRepository<Pet, String> {


    List<Pet> findPetBySpeciesAndBreedAndAge(Optional<String> species, Optional<String> breed, Optional<Integer> age);







}
