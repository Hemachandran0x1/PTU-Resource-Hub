/*package com.mscomm.subjectservice.service.impl;
import org.springframework.stereotype.Service;

import com.mscomm.subjectservice.entity.Department;
import com.mscomm.subjectservice.repository.DepartmentRepository;
import com.mscomm.subjectservice.service.DepartmentService;

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