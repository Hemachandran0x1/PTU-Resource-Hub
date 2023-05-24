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

    @PostMapping
    public ResponseEntity<Topic> saveTopic(@RequestBody Topic topic){
        Topic savedTopic = topicService.saveTopic(topic);
        return new ResponseEntity<>(savedTopic, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Topic> getTopicById(@PathVariable("id") Long topicId){
        Topic topic = topicService.getTopic(topicId);
        return ResponseEntity.ok(topic);
    }
    @GetMapping
    public ResponseEntity<?> saveUser(){
	 List<Topic> departments = new ArrayList<>();
        	departments=	topicService.getallTopics();
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }
}

