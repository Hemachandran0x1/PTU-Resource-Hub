package com.mscomm.requestservice.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.requestservice.entity.Request;

public interface RequestRepository extends JpaRepository<Request,Long> {

}
