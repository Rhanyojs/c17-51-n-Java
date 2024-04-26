package tech.nocountry.c1751njava.petadoption.ImageUpload.Model.Mapper;

import tech.nocountry.c1751njava.petadoption.ImageUpload.Model.Image;

import java.util.Map;

public class ImageMapper {

    private ImageMapper() {
    }

    public static Image toImage(Map<?, ?> map) {
        return Image.builder()
                .imageId((String) map.get("public_id"))
                .imageUrl((String) map.get("url"))
                .weight(map.get("width").toString())
                .height(map.get("height").toString())
                .build();
    }

}
