package com.mscomm.requestservice.controller;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.requestservice.dto.ResponseDto;
import com.mscomm.requestservice.entity.Request;
import com.mscomm.requestservice.service.RequestService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/requests")
@AllArgsConstructor
public class RequestController {
	private RequestService requestService;

    @PostMapping
    public ResponseEntity<Request> saveRequest(@RequestBody Request request){
        Request savedRequest = requestService.saveRequest(request);
        return new ResponseEntity<>(savedRequest, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Request> getRequestById(@PathVariable("id") Long requestId){
        Request request = requestService.getRequestById(requestId);
        return ResponseEntity.ok(request);
    }
        @GetMapping
	    public ResponseEntity<?> saveUser(){
		 List<ResponseDto> requests = new ArrayList<>();
	        	requests=	requestService.getUserAndRequests();
	        return new ResponseEntity<>(requests, HttpStatus.OK);
	    }
        }

    