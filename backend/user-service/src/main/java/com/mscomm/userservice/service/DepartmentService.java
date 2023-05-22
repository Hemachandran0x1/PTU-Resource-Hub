package com.mscomm.userservice.service;
import java.util.List;

import com.mscomm.userservice.entity.*;
public interface DepartmentService {
	Department getDepartment(long id);
	List<Department> getallDepartments();
}
