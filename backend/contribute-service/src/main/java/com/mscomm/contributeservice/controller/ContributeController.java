package com.mscomm.contributeservice.controller;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.contributeservice.entity.Contribute;
import com.mscomm.contributeservice.service.ContributeService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/contributes")
@AllArgsConstructor
public class ContributeController {
	private ContributeService contributeService;

    @PostMapping
    public ResponseEntity<Contribute> saveContribute(@RequestBody Contribute contribute){
        Contribute savedContribute = contributeService.saveContribute(contribute);
        return new ResponseEntity<>(savedContribute, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Contribute> getContributeById(@PathVariable("id") Long contributeId){
        Contribute contribute = contributeService.getContributeById(contributeId);
        return ResponseEntity.ok(contribute);
    }
    @GetMapping
    public ResponseEntity<?> saveUser(){
	 List<Contribute> contributes = new ArrayList<>();
        	contributes=	contributeService.getallContributes();
        return new ResponseEntity<>(contributes, HttpStatus.OK);
    }
}

