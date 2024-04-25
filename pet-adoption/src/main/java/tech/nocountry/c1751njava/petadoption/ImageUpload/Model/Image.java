package tech.nocountry.c1751njava.petadoption.ImageUpload.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;

@Data
@Entity
@Table(name = "AM_IMAGES")
@Builder
@AllArgsConstructor
public class Image {

    public Image(String imageId, String imageUrl, String weight, String height) {
        this.imageId = imageId;
        this.imageUrl = imageUrl;
        this.weight = weight;
        this.height = height;
    }

    @Id
    @Column(name = "IMAGE_ID")
    private String imageId;

    @Column(name = "IMAGE_URL", nullable = false, unique = true)
    private String imageUrl;

    @Column(name = "WEIGHT")
    private String weight;

    @Column(name = "HEIGHT")
    private String height;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "PET_ID")
    private Pet pet;
}
