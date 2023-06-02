package com.mscomm.userservice.controller;

import lombok.AllArgsConstructor;
//import com.mscomm.userservice.dto.ResponseDto;
import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.exceptions.UserNotFoundException;
import com.mscomm.userservice.requestobjects.Login;
import com.mscomm.userservice.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("api/users")
@AllArgsConstructor
public class UserController {
	  private UserService userService;
	    @CrossOrigin(origins = "http://localhost:3000")
	    @PostMapping("/signup")
	    public ResponseEntity<User> saveUser(@RequestBody User user){
	        User savedUser = userService.register(user);
	        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
	    }
	    
	    @CrossOrigin(origins = "http://localhost:3000")
	    @PostMapping("/login")
	    public ResponseEntity<?> loginuser(@RequestBody Login login)
	    { 
	    	try{
	    		User user =userService.login(login.getEmail(),login.getPassword());
	    		return ResponseEntity.ok(user);
	    	}
	    	catch(UserNotFoundException e)
	    	{
	    		return ResponseEntity.badRequest().body(e.getMessage());
	    	}
	    }

	    @GetMapping("{id}")
	    public ResponseEntity<User> getUser(@PathVariable("id") Long userId){
	        User responseDto = userService.getUser(userId);
	     return ResponseEntity.ok(responseDto);
	    }
	    @PutMapping("{id}")
	    public ResponseEntity<User> updateUser(@RequestBody User user,@PathVariable("id") Long userId){
	        User savedUser = userService.updateUser(user,userId);
	        return new ResponseEntity<>(savedUser, HttpStatus.OK);
	    }
}
