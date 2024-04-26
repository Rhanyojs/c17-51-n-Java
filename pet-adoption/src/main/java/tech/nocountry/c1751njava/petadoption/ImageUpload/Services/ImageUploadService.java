package tech.nocountry.c1751njava.petadoption.ImageUpload.Services;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tech.nocountry.c1751njava.petadoption.ImageUpload.Model.Image;
import tech.nocountry.c1751njava.petadoption.ImageUpload.Model.Mapper.ImageMapper;
import tech.nocountry.c1751njava.petadoption.ImageUpload.Repository.ImageRepository;
import tech.nocountry.c1751njava.petadoption.Pet.Model.Pet;
import tech.nocountry.c1751njava.petadoption.exception.custom.ValidationError;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageUploadService {

    private final Cloudinary cloudinary;
    private final ImageRepository imageRepository;

    public Optional<Image> findImageByPublicId(String publicId) {
        return imageRepository.findById(publicId);
    }

    public Image uploadImage(MultipartFile multipartFile, Pet pet) throws IOException {
        File file = convertMultiPartToFile(multipartFile);
        Image uploadedImage = ImageMapper.toImage(cloudinary.uploader().upload(file, ObjectUtils.emptyMap()));
        uploadedImage.setPet(pet);
        imageRepository.save(uploadedImage);
        file.delete();
        return uploadedImage;
    }

    public Map deleteImage(String publicId) throws IOException {
        if (publicId == null || publicId.isEmpty()) {
            throw new ValidationError("imageId", "image id cannot be empty");

        }
        imageRepository.deleteById(publicId);
        return cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
    }

    public File convertMultiPartToFile(MultipartFile file) throws IOException {
        File convFile = new File(Objects.requireNonNull(file.getOriginalFilename()));
        try (FileOutputStream fos = new FileOutputStream(convFile)) {
            fos.write(file.getBytes());
        }
        return convFile;
    }

}
