package com.mscomm.requestservice.service;

import java.util.List;


import com.mscomm.requestservice.entity.Report;

public interface ReportService {
  Report saveReport(Report report);

  Report getReportById(Long reportId);
	List<Report> getallReports();

}
