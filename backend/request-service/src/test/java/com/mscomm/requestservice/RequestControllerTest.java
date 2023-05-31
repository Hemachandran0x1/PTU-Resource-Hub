package com.mscomm.requestservice;


import com.mscomm.requestservice.controller.RequestController;
import com.mscomm.requestservice.dto.ResponseDto;
import com.mscomm.requestservice.entity.Request;
import com.mscomm.requestservice.service.RequestService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

public class RequestControllerTest {

    @Mock
    private RequestService requestService;

    private RequestController requestController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        requestController = new RequestController(requestService);
    }

    @Test
    public void testSaveRequest() {
        // Create a sample request
        Request request = new Request();

        // Mock the behavior of requestService.saveRequest()
        when(requestService.saveRequest(any(Request.class))).thenReturn(request);

        // Make the saveRequest() call
        ResponseEntity<Request> responseEntity = requestController.saveRequest(request);

        // Verify the response
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(request, responseEntity.getBody());

        // Verify that requestService.saveRequest() was called once with the correct request
        verify(requestService, times(1)).saveRequest(request);
    }

    @Test
    public void testGetRequestById() {
        // Create a sample request
        Request request = new Request();
        request.setId(1L);

        // Mock the behavior of requestService.getRequestById()
        when(requestService.getRequestById(1L)).thenReturn(request);

        // Make the getRequestById() call
        ResponseEntity<Request> responseEntity = requestController.getRequestById(1L);

        // Verify the response
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(request, responseEntity.getBody());

        // Verify that requestService.getRequestById() was called once with the correct request ID
        verify(requestService, times(1)).getRequestById(1L);
    }

    @Test
    public void testGetUserAndRequests() {
        // Create a list of sample response DTOs
        List<ResponseDto> responseDtos = new ArrayList<>();
        responseDtos.add(new ResponseDto());
        responseDtos.add(new ResponseDto());

        // Mock the behavior of requestService.getUserAndRequests()
        when(requestService.getUserAndRequests()).thenReturn(responseDtos);

        // Make the getUserAndRequests() call
        ResponseEntity<?> responseEntity = requestController.saveUser();

        // Verify the response
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(responseDtos, responseEntity.getBody());

        // Verify that requestService.getUserAndRequests() was called once
        verify(requestService, times(1)).getUserAndRequests();
    }
}
