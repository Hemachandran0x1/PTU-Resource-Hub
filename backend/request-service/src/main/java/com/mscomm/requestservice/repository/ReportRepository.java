package com.mscomm.requestservice.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.requestservice.entity.Report;

public interface ReportRepository extends JpaRepository<Report,Long>{ //Report Repository
	

}
