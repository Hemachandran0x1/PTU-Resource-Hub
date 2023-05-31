package com.mscomm.userservice.service.impl;
import com.mscomm.userservice.entity.Department;
//import com.mscomm.userservice.dto.ResponseDto;
import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.exceptions.UserNotFoundException;
import com.mscomm.userservice.service.*;
import com.mscomm.userservice.repository.*;
import org.springframework.web.client.RestTemplate;

import lombok.AllArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
@AllArgsConstructor
 
public class DepartmentServiceImpl implements DepartmentService {
	@Autowired 
	private DepartmentRepository repo;
	
	@Override
	public Department getDepartment(long id)
	{
		return repo.findById(id).get();
	}

	@Override
	public List<Department> getallDepartments()
	{
		 List<Department> departments = new ArrayList<>();
		 repo.findAll().forEach(departments::add);
	     return departments;
	}
}
