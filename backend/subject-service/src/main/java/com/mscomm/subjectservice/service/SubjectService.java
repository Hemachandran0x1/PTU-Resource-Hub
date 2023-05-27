package com.mscomm.subjectservice.service;
import java.util.List;

import com.mscomm.subjectservice.entity.*;

public interface SubjectService {
	Subject saveSubject(Subject s);
	Subject getSubject(Long id);
	List<Subject> getallSubjects();

}

