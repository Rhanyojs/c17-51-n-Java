package tech.nocountry.c1751njava.petadoption.Pet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;
import tech.nocountry.c1751njava.petadoption.Pet.Size;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet, String> {

    @Query("SELECT p FROM Pet p WHERE "
            + "(:species IS NULL OR p.species = :species) AND "
            + "(:breed IS NULL OR p.breed = :breed) AND "
            + "(:location IS NULL OR p.location = :location) AND "
            + "(:gender IS NULL OR p.gender = :gender) AND "
            + "(:size IS NULL OR p.size = :size) AND "
            + "(:age IS NULL OR p.age = :age)")
    List<Pet> findPetByFilters(@Param("species") String species,
                                             @Param("breed") String breed,
                                             @Param("location") String location,
                                             @Param("gender") String gender,
                                             @Param("size") Size size,
                                             @Param("age") Integer age);

}
