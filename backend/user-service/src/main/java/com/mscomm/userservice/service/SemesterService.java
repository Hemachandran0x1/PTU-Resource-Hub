package com.mscomm.userservice.service;
import java.util.List;
import com.mscomm.userservice.entity.*;
public interface SemesterService {
	Semester getSemesterbyid(long id);
	List<Semester> getallSemesters();
}
