package com.mscomm.subjectservice.controller;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.subjectservice.entity.Topic;
import com.mscomm.subjectservice.service.TopicService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/topics")
@AllArgsConstructor
public class TopicController {
	@Autowired
	private TopicService topicService;
	@CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public ResponseEntity<Topic> saveTopic(@RequestBody Topic topic){
        Topic savedTopic = topicService.saveTopic(topic);
        return new ResponseEntity<>(savedTopic, HttpStatus.CREATED);
    }
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("{id}")
    public ResponseEntity<Topic> getTopicById(@PathVariable("id") Long topicId){
        Topic topic = topicService.getTopic(topicId);
        return ResponseEntity.ok(topic);
    }
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public ResponseEntity<?> saveUser(){
	 List<Topic> departments = new ArrayList<>();
        	departments=	topicService.getallTopics();
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("subject/{subject}/unit/{unit}")
    public ResponseEntity<?> gettopicbyunit(@PathVariable("unit") int unit,@PathVariable("subject") Long sid){
	 List<Topic> departments = new ArrayList<>();
        	departments=	topicService.getallTopicsByUnit(sid,unit);
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }
}

