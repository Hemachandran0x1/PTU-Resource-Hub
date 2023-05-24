package com.mscomm.subjectservice.controller;
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

    @PostMapping
    public ResponseEntity<Subject> saveSubject(@RequestBody Subject subject){
        Subject savedSubject = subjectService.saveSubject(subject);
        return new ResponseEntity<>(savedSubject, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Subject> getSubjectById(@PathVariable("id") Long subjectId){
        Subject subject = subjectService.getSubject(subjectId);
        return ResponseEntity.ok(subject);
    }
}
