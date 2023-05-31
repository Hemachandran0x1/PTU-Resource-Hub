package com.mscomm.requestservice;

import com.mscomm.requestservice.controller.ReportController;
import com.mscomm.requestservice.entity.Report;
import com.mscomm.requestservice.service.ReportService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class ReportControllerTest {
    
    @Mock
    private ReportService reportService;
    
    private ReportController reportController;
    
    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        reportController = new ReportController(reportService);
    }
    
    @Test
    public void testSaveReport() {
        // Create a sample report
        Report report = new Report();
        report.setId(1L);
        report.setReportdesc("Test Report");
        
        // Mock the behavior of reportService.saveReport()
        when(reportService.saveReport(any(Report.class))).thenReturn(report);
        
        // Make the POST request to save the report
        ResponseEntity<Report> response = reportController.saveReport(report);
        
        // Verify the response
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(report, response.getBody());
        
        // Verify that reportService.saveReport() was called once
        verify(reportService, times(1)).saveReport(any(Report.class));
    }
    
    @Test
    public void testGetReportById() {
        // Create a sample report
        Report report = new Report();
        report.setId(1L);
        report.setReportdesc("Test Report");
        
        // Mock the behavior of reportService.getReportById()
        when(reportService.getReportById(1L)).thenReturn(report);
        
        // Make the GET request to retrieve the report by ID
        ResponseEntity<Report> response = reportController.getReportById(1L);
        
        // Verify the response
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(report, response.getBody());
        
        // Verify that reportService.getReportById() was called once with the correct report ID
        verify(reportService, times(1)).getReportById(1L);
    }
    
    @Test
    public void testGetAllReports() {
        // Create a list of sample reports
        List<Report> reports = new ArrayList<>();
        reports.add(new Report(1L, "1", "ErrorPage",1, "1", "Full Stack Development"));
        reports.add(new Report(2L, "1", "ErrorPage",1, "1", "Full Stack Development"));
        reports.add(new Report(3L, "1", "ErrorPage",1, "1", "Full Stack Development"));
        reports.add(new Report(4L, "1", "ErrorPage",1, "1", "Full Stack Development"));
        reports.add(new Report(5L,"1", "ErrorPage",1, "1", "Full Stack Development"));
        reports.add(new Report(6L, "1", "ErrorPage",1, "1", "Full Stack Development"));
        
        // Mock the behavior of reportService.getAllReports()
        when(reportService.getallReports()).thenReturn(reports);
        
        // Make the GET request to retrieve all reports
        ResponseEntity<?> response = reportController.saveUser();
        
        // Verify the response
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(reports, response.getBody());
        
        // Verify that reportService.getAllReports() was called once
        verify(reportService, times(1)).getallReports();
    }
}
