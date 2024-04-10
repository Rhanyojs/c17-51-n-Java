package tech.nocountry.c1751njava.petadoption.Shelter.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.nocountry.c1751njava.petadoption.Shelter.Model.Shelter;

public interface ShelterRepository extends JpaRepository<Shelter,String> {
}
