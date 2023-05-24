package com.mscomm.subjectservice.service.impl;
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
}
