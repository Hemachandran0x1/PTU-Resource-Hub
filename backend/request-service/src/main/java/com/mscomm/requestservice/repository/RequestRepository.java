package com.mscomm.requestservice.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.requestservice.entity.Request;

public interface RequestRepository extends JpaRepository<Request,Long> {
	List <Request> findByStatus(int s);
}
