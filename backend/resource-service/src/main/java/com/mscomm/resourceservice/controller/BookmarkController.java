package com.mscomm.resourceservice.controller;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.resourceservice.dto.ResponseDto;
import com.mscomm.resourceservice.entity.Bookmark;
import com.mscomm.resourceservice.service.BookmarkService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/bookmarks")
@AllArgsConstructor
public class BookmarkController {
	private BookmarkService bookmarkService;

    @PostMapping
    public ResponseEntity<Bookmark> saveBookmark(@RequestBody Bookmark bookmark){
        Bookmark savedBookmark = bookmarkService.saveBookmark(bookmark);
        return new ResponseEntity<>(savedBookmark, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Bookmark> getBookmarkById(@PathVariable("id") Long bookmarkId){
        Bookmark bookmark = bookmarkService.getBookmark(bookmarkId);
        return ResponseEntity.ok(bookmark);
    }
    @GetMapping
    public ResponseEntity<?> saveUser(){
	 List<Bookmark> departments = new ArrayList<>();
        	departments=	bookmarkService.getallBookmarks();
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }
    @GetMapping("/user/{uid}")
    public ResponseEntity<?> saveUser(@PathVariable("uid") Long uid){
	 List<Bookmark> departments = new ArrayList<>();
        	departments=	bookmarkService.getallBookmarksbyUser(uid);
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }
    @DeleteMapping("/user/{uid}/bookmark/{bid}")
    public ResponseEntity<String> deleteBookmark(@PathVariable("bid") Long bid,@PathVariable("uid") Long uid){
   	 String s;
           	s=	bookmarkService.deleteBookmark(bid,uid);
           return new ResponseEntity<>(s, HttpStatus.OK);
       }
    @GetMapping("/bookmark/{bid}")
    public ResponseEntity<?> getUser(@PathVariable("bid") Long bid){
	 ResponseDto departments;
        	departments=	bookmarkService.getUser(bid);
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }
}

