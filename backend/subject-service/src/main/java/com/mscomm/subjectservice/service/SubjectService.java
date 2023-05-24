package com.mscomm.subjectservice.service;
import com.mscomm.subjectservice.entity.*;

public interface SubjectService {
	Subject saveSubject(Subject s);
	Subject getSubject(Long id);
}
