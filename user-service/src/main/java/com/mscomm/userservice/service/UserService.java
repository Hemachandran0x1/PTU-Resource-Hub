package com.mscomm.userservice.service;
import com.mscomm.userservice.entity.*;

//import com.mscomm.userservice.dto.ResponseDto;
public interface UserService {
	User register(User user);
	User login(String username,String password);
   // ResponseDto getUser(Long userId);
}
