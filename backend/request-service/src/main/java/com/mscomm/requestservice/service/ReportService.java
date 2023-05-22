package com.mscomm.requestservice.service;

import com.mscomm.requestservice.entity.Report;

public interface ReportService {
  Report saveReport(Report report);

  Report getReportById(Long reportId);
}
