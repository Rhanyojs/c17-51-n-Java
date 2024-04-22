package tech.nocountry.c1751njava.petadoption.Pet.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;

public interface PetsRepository extends JpaRepository<Pet,String> {

}
