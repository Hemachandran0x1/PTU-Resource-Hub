/*package com.mscomm.resourceservice.service.impl;
import org.springframework.stereotype.Service;

import com.mscomm.resourceservice.entity.Department;
import com.mscomm.resourceservice.repository.DepartmentRepository;
import com.mscomm.resourceservice.service.DepartmentService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class DepartmentServiceImpl implements DepartmentService{
	
	 private DepartmentRepository departmentRepository;
	@Override
	public Department saveDepartment(Department department) {
	return departmentRepository.save(department);
	}

	@Override
	public Department getDepartmentById(Long departmentId) {
		 return departmentRepository.findById(departmentId).get();
	}

}
*/