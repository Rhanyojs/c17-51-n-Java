package tech.nocountry.c1751njava.petadoption.Request.Services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tech.nocountry.c1751njava.petadoption.Request.Repository.RequestRepository;
import tech.nocountry.c1751njava.petadoption.Request.Request;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RequestServicesImpl implements  RequestServices{

    private final RequestRepository requestRepository;


}
