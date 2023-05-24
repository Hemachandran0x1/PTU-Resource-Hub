package com.mscomm.subjectservice.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.subjectservice.entity.Subject;

public interface SubjectRepository extends JpaRepository<Subject,Long> {
	
}
