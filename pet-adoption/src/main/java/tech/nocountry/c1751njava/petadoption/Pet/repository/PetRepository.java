package tech.nocountry.c1751njava.petadoption.Pet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet, String> {

    @Query(value = "SELECT p FROM am_pets p WHERE p.species = ?1", nativeQuery = false)
    List<Pet> findPetBySpecies(String species);

    @Query(value = "SELECT p FROM am_pets p WHERE p.breed = ?1", nativeQuery = false)
    List<Pet> findPetByBreed(String breed);

    @Query(value = "SELECT p FROM am_pets p WHERE p.state = 1", nativeQuery = false)
    List<Pet> findPetByStateTrue();

    @Query(value = "SELECT p FROM am_pets p WHERE p.state = 0", nativeQuery = false)
    List<Pet> findPetByStateFalse();



}
