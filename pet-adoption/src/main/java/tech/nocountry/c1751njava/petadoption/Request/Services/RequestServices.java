package tech.nocountry.c1751njava.petadoption.Request.Services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.nocountry.c1751njava.petadoption.Request.Repository.RequestRepository;
import tech.nocountry.c1751njava.petadoption.Request.Request;
import tech.nocountry.c1751njava.petadoption.Request.State;

import java.util.List;

@Service
@AllArgsConstructor
public class RequestServices {

    @Autowired
    private RequestRepository requestRepository;

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    public Request getRequestById(String id) {
        return requestRepository.findById(id).orElseThrow(() -> new RuntimeException("Request not found"));
    }

    public Request createRequest(Request request) {
        return requestRepository.save(request);
    }

    public Request updateRequest(Request request) {
        return requestRepository.save(request);
    }

    public void deleteRequest(String id) {
        requestRepository.deleteById(id);
    }

    public Request changeRequestState(String requestId, State newState) {
        Request request = getRequestById(requestId);
        request.setState(newState);
        return requestRepository.save(request);
    }

}
