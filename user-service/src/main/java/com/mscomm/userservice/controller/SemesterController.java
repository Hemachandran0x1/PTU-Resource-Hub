package com.mscomm.userservice.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mscomm.userservice.entity.Semester;
import com.mscomm.userservice.service.DepartmentService;
import com.mscomm.userservice.service.SemesterService;

import lombok.AllArgsConstructor;
@RestController
@RequestMapping("api/semester")
@AllArgsConstructor
public class SemesterController {
	@Autowired
	private SemesterService service;
	 @CrossOrigin(origins = "http://localhost:3000")
	    @GetMapping
	    public ResponseEntity<?> saveUser(){
		 List<Semester> semesters = new ArrayList<>();
		 semesters=	service.getallSemesters();
	     return new ResponseEntity<>(semesters, HttpStatus.OK);
	    }
}
