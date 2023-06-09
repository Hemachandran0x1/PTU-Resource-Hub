package com.mscomm.userservice.service.impl;

import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.exceptions.UserNotFoundException;
import com.mscomm.userservice.service.*;
import com.mscomm.userservice.repository.*;
import org.springframework.web.client.RestTemplate;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
@AllArgsConstructor

public class UserServiceImpl implements UserService {

	 private UserRepository userRepository;
	    private RestTemplate restTemplate;
	@Override
	public User register(User user) {
		user.setRole("USER");
		return userRepository.save(user);
	}
	@Override
	public User login(String email,String password)
	{
		User user=userRepository.findByEmail(email);
		if(user==null)
		{
			  throw new UserNotFoundException("Invalid email or password");
        }

        if (!(password.equals(user.getPassword()))) {
            throw new UserNotFoundException("Invalid email or password");
        }

        return user;
		
	}

	@Override
	public User getUser(Long userId) {
        User user = userRepository.findById(userId).get();
        return user;
	}
	@Override
	public User updateUser(User user,Long uid)
	{
		final User u1 = userRepository.findById(uid).get();
		u1.setDepartmentid(user.getDepartmentid());
		u1.setSemesterid(user.getSemesterid());
		return userRepository.save(u1);
	}
	
}
