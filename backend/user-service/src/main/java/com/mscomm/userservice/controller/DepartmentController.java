package com.mscomm.userservice.controller;
import lombok.AllArgsConstructor;
//import com.mscomm.userservice.dto.ResponseDto;
import com.mscomm.userservice.entity.Department;
import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.exceptions.UserNotFoundException;
import com.mscomm.userservice.requestobjects.Login;
import com.mscomm.userservice.service.DepartmentService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("api/department")
@AllArgsConstructor
public class DepartmentController {
	@Autowired
	private DepartmentService service;
	 @CrossOrigin(origins = "http://localhost:3000")
	    @GetMapping
	    public ResponseEntity<?> saveUser(){
		 List<Department> departments = new ArrayList<>();
	        	departments=	service.getallDepartments();
	        return new ResponseEntity<>(departments, HttpStatus.OK);
	    }
}
