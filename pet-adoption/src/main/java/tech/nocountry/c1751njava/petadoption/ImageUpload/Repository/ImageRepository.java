package tech.nocountry.c1751njava.petadoption.ImageUpload.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.c1751njava.petadoption.ImageUpload.Model.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, String> {
}
