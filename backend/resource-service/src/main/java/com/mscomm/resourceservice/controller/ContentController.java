package com.mscomm.resourceservice.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.resourceservice.entity.Content;
import com.mscomm.resourceservice.service.ContentService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/contents")
@AllArgsConstructor
public class ContentController {
	private ContentService contentService;

    @PostMapping
    public ResponseEntity<Content> saveContent(@RequestBody Content content){
        Content savedContent = contentService.saveContent(content);
        return new ResponseEntity<>(savedContent, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Content> getContentById(@PathVariable("id") Long contentId){
        Content content = contentService.getContent(contentId);
        return ResponseEntity.ok(content);
    }
}
