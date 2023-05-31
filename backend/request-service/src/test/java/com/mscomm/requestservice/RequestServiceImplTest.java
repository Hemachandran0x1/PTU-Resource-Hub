package com.mscomm.requestservice;

import com.mscomm.requestservice.dto.RequestDto;
import com.mscomm.requestservice.dto.ResponseDto;
import com.mscomm.requestservice.dto.UserDto;
import com.mscomm.requestservice.entity.Request;
import com.mscomm.requestservice.repository.RequestRepository;
import com.mscomm.requestservice.service.impl.RequestServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

public class RequestServiceImplTest {

    @Mock
    private RestTemplate restTemplate;

    @Mock
    private RequestRepository requestRepository;

    private RequestServiceImpl requestService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        requestService = new RequestServiceImpl(restTemplate, requestRepository);
    }

    @Test
    public void testSaveRequest() {
        // Create a sample request
        Request request = new Request();
        request.setStatus(0);

        // Mock the behavior of requestRepository.save()
        when(requestRepository.save(any(Request.class))).thenReturn(request);

        // Make the saveRequest() call
        Request savedRequest = requestService.saveRequest(request);

        // Verify the response
        assertEquals(0, savedRequest.getStatus());

        // Verify that requestRepository.save() was called once with the correct request
        verify(requestRepository, times(1)).save(request);
    }

    @Test
    public void testGetRequestById() {
        // Create a sample request
        Request request = new Request();
        request.setId(1L);
        request.setStatus(0);

        // Mock the behavior of requestRepository.findById()
        when(requestRepository.findById(1L)).thenReturn(java.util.Optional.of(request));

        // Make the getRequestById() call
        Request retrievedRequest = requestService.getRequestById(1L);

        // Verify the response
        assertEquals(1L, retrievedRequest.getId());
        assertEquals(0, retrievedRequest.getStatus());

        // Verify that requestRepository.findById() was called once with the correct request ID
        verify(requestRepository, times(1)).findById(1L);
    }

    @Test
    public void testGetallRequests() {
        // Create a list of sample requests
        List<Request> requests = new ArrayList<>();
        requests.add(new Request());
        requests.add(new Request());

        // Mock the behavior of requestRepository.findAll()
        when(requestRepository.findAll()).thenReturn(requests);

        // Make the getallRequests() call
        List<Request> retrievedRequests = requestService.getallRequests();

        // Verify the response
        assertEquals(2, retrievedRequests.size());

        // Verify that requestRepository.findAll() was called once
        verify(requestRepository, times(1)).findAll();
    }

    @Test
    public void testGetallRequestsbyStatus() {
        // Create a list of sample requests
        List<Request> requests = new ArrayList<>();
        requests.add(new Request());
        requests.add(new Request());

        // Mock the behavior of requestRepository.findByStatus()
        when(requestRepository.findByStatus(0)).thenReturn(requests);

        // Make the getallRequestsbyStatus() call
        List<Request> retrievedRequests = requestService.getallRequestsbyStatus(0);

        // Verify the response
        assertEquals(2, retrievedRequests.size());

        // Verify that requestRepository.findByStatus() was called once with the correct status
        verify(requestRepository, times(1)).findByStatus(0);
    }

    @Test
    public void testGetUserAndRequests() {
        // Create a sample request
        Request request = new Request();
        request.setStatus(0);
        request.setUserid(1L);

        // Create a sample response entity
        UserDto userDto = new UserDto();
        
        userDto.setName("John Doe");
        userDto.setEmail("john@gmail.com");
        userDto.setPassword("jjjjjjj");
        userDto.setDepartmentid("1");
        userDto.setSemesterid("6");
        userDto.setRole("User");
        ResponseEntity<UserDto> responseEntity = new ResponseEntity<>(userDto, HttpStatus.OK);

        // Mock the behavior of requestRepository.findAll()
        List<Request> requests = new ArrayList<>();
        requests.add(request);
        when(requestRepository.findAll()).thenReturn(requests);

        // Mock the behavior of restTemplate.getForEntity()
        when(restTemplate.getForEntity(anyString(), eq(UserDto.class))).thenReturn(responseEntity);

        // Make the getUserAndRequests() call
        List<ResponseDto> responseDtos = requestService.getUserAndRequests();

        // Verify the response
        assertEquals(1, responseDtos.size());
        ResponseDto responseDto = responseDtos.get(0);
        assertEquals(request.getUserid(), responseDto.getRequest().getUserid());
        assertEquals(userDto, responseDto.getUser());

        // Verify that requestRepository.findAll() was called once
        verify(requestRepository, times(1)).findAll();

        // Verify that restTemplate.getForEntity() was called once with the correct URL
        verify(restTemplate, times(1)).getForEntity(eq("http://user-service:8080/api/users/1"), eq(UserDto.class));
    }
}
