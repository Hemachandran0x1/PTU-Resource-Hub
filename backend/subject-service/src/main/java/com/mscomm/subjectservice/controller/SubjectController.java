package com.mscomm.subjectservice.controller;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.subjectservice.entity.Subject;
import com.mscomm.subjectservice.service.SubjectService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/subjects")
@AllArgsConstructor
public class SubjectController {

	private SubjectService subjectService;
	@CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public ResponseEntity<Subject> saveSubject(@RequestBody Subject subject){
        Subject savedSubject = subjectService.saveSubject(subject);
        return new ResponseEntity<>(savedSubject, HttpStatus.CREATED);
    }
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("{id}")
    public ResponseEntity<Subject> getSubjectById(@PathVariable("id") Long subjectId){
        Subject subject = subjectService.getSubject(subjectId);
        return ResponseEntity.ok(subject);
    }
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping
    public ResponseEntity<?> saveUser(){
	 List<Subject> departments = new ArrayList<>();
        	departments=	subjectService.getallSubjects();
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("sem/{semid}/dept/{deptid}")
    public ResponseEntity<?> getSubjects(@PathVariable("semid") Long semid,@PathVariable("deptid") Long deptid){
	 List<Subject> departments = new ArrayList<>();
        	departments=	subjectService.getSubjects(semid,deptid);
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }
}

