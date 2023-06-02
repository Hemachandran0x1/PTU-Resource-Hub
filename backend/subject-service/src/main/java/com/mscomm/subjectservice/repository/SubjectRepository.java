package com.mscomm.subjectservice.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.subjectservice.entity.Subject;

public interface SubjectRepository extends JpaRepository<Subject,Long> {
	List<Subject> findBySemidAndDeptid(Long semid,Long deptid);
}
