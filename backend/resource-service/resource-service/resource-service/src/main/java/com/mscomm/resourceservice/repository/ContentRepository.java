package com.mscomm.resourceservice.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.resourceservice.entity.Content;
public interface ContentRepository extends JpaRepository<Content,Long>{
	List<Content> findByTopicidAndType(Long topic,int type);
}
