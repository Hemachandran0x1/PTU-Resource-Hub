//package com.mscomm.requestservice.service.impl;
//import org.springframework.stereotype.Service;
//
//import com.mscomm.requestservice.entity.Department;
//import com.mscomm.requestservice.repository.DepartmentRepository;
//import com.mscomm.requestservice.service.DepartmentService;
//
//import lombok.AllArgsConstructor;
//
//@Service
//@AllArgsConstructor
//
//public class DepartmentServiceImpl implements DepartmentService{
//	
//	 private DepartmentRepository departmentRepository;
//	@Override
//	public Department saveDepartment(Department department) {
//	return departmentRepository.save(department);
//	}
//
//	@Override
//	public Department getDepartmentById(Long departmentId) {
//		 return departmentRepository.findById(departmentId).get();
//	}
//
//}
