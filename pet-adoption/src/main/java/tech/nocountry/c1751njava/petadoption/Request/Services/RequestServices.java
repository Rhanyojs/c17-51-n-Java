package tech.nocountry.c1751njava.petadoption.Request.Services;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.modelmapper.ModelMapper;
import tech.nocountry.c1751njava.petadoption.Request.Repository.RequestRepository;
import tech.nocountry.c1751njava.petadoption.Request.Request;
import tech.nocountry.c1751njava.petadoption.Request.RequestDto;
import tech.nocountry.c1751njava.petadoption.Request.State;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RequestServices {

    private final RequestRepository requestRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public RequestServices(RequestRepository requestRepository, ModelMapper modelMapper) {
        this.requestRepository = requestRepository;
        this.modelMapper = modelMapper;
    }

    public List<RequestDto> getAllRequests() {
        List<Request> requests = requestRepository.findAll();
        return requests.stream()
                .map(request -> modelMapper.map(request, RequestDto.class))
                .collect(Collectors.toList());
    }

    public RequestDto getRequestById(String id) {
        Request request = requestRepository.findById(id).orElseThrow(() -> new RuntimeException("Request not found"));
        return modelMapper.map(request, RequestDto.class);
    }

    public RequestDto createRequest(RequestDto requestDTO) {
        Request request = modelMapper.map(requestDTO, Request.class);
        Request savedRequest = requestRepository.save(request);
        return modelMapper.map(savedRequest, RequestDto.class);
    }

    public RequestDto updateRequest(RequestDto requestDTO) {
        Request request = modelMapper.map(requestDTO, Request.class);
        Request updatedRequest = requestRepository.save(request);
        return modelMapper.map(updatedRequest, RequestDto.class);
    }

    public void deleteRequest(String id) {
        requestRepository.deleteById(id);
    }

    public RequestDto changeRequestState(String requestId, State newState) {
        Request request = requestRepository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Request not found"));
        request.setState(newState);
        Request updatedRequest = requestRepository.save(request);
        return modelMapper.map(updatedRequest, RequestDto.class);
    }
}
