package tech.nocountry.c1751njava.petadoption.Request.Controller.v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.nocountry.c1751njava.petadoption.Request.RequestDto;
import tech.nocountry.c1751njava.petadoption.Request.Services.RequestServices;
import tech.nocountry.c1751njava.petadoption.Request.State;

import java.util.List;

@RestController
@RequestMapping("/api/v1/request")
public class RequestController {

    @Autowired
    private RequestServices requestServices;

    @GetMapping
    public ResponseEntity<List<RequestDto>> getAllRequests() {
        List<RequestDto> requests = requestServices.getAllRequests();
        return ResponseEntity.ok(requests);
    }

    @PostMapping
    public ResponseEntity<RequestDto> createRequest(@RequestBody RequestDto requestDto) {
        RequestDto createdRequestDto = requestServices.createRequest(requestDto);
        return ResponseEntity.ok(createdRequestDto);
    }

    @PutMapping
    public ResponseEntity<RequestDto> updateRequest(@RequestBody RequestDto request) {
        RequestDto updatedRequestDto = requestServices.updateRequest(request);
        return ResponseEntity.ok(updatedRequestDto);
    }

    @PatchMapping("/{id}/state")
    public ResponseEntity<RequestDto> changeRequestState(@PathVariable String id, @RequestBody UpdateStateRequest stateUpdate) {
        RequestDto updatedRequestDto = requestServices.changeRequestState(id, stateUpdate.getState());
        return ResponseEntity.ok(updatedRequestDto);
    }

}
