package tech.nocountry.c1751njava.petadoption.Request;

import lombok.Data;

import java.util.List;

@Data
public class RequestDto {

    private String id;

    private String formId;

    private List<String> petIds;

    private String state;
}
