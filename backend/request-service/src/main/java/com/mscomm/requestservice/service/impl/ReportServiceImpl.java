package com.mscomm.requestservice.service.impl;
import org.springframework.stereotype.Service;

import com.mscomm.requestservice.entity.Report;
import com.mscomm.requestservice.repository.ReportRepository;
import com.mscomm.requestservice.service.ReportService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class ReportServiceImpl implements ReportService {
	 private ReportRepository reportRepository;
	@Override
	public Report saveReport(Report report) {
	return reportRepository.save(report);
	}

	@Override
	public Report getReportById(Long reportId) {
		 return reportRepository.findById(reportId).get();
	}

}
