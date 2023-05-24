package com.mscomm.subjectservice.service.impl;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.mscomm.subjectservice.entity.Subject;
import com.mscomm.subjectservice.repository.SubjectRepository;
import com.mscomm.subjectservice.service.SubjectService;


import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class SubjectServiceImpl implements SubjectService {
	

	 private SubjectRepository subjectRepository;
	@Override
	public Subject saveSubject(Subject subject) {
	return subjectRepository.save(subject);
	}

	@Override
	public Subject getSubject(Long subjectId) {
		 return subjectRepository.findById(subjectId).get();
	}
	@Override
	public List<Subject> getallSubjects()
	{
		 List<Subject> subjects = new ArrayList<>();
		 subjectRepository.findAll().forEach(subjects::add);
	     return subjects;
	}
}
