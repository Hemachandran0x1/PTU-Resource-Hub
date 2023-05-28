package com.mscomm.subjectservice.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.subjectservice.entity.Topic;

public interface TopicRepository extends JpaRepository<Topic,Long>{
	List<Topic> findBySubjectid(Long subjectid);
	List<Topic> findBySubjectidAndUnit(Long subjectid,int unitid);
}
