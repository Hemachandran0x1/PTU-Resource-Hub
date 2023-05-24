/*package com.mscomm.contributeservice.service.impl;
import org.springframework.stereotype.Service;

import com.mscomm.contributeservice.entity.Department;
import com.mscomm.contributeservice.repository.DepartmentRepository;
import com.mscomm.contributeservice.service.DepartmentService;

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