package com.mscomm.requestservice;

import com.mscomm.requestservice.entity.Report;
import com.mscomm.requestservice.repository.ReportRepository;
import com.mscomm.requestservice.service.impl.ReportServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ReportServiceImplTest {
    
    @Mock
    private ReportRepository reportRepository;
    
    private ReportServiceImpl reportService;
    
    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        reportService = new ReportServiceImpl(reportRepository);
    }
    
    @Test
    public void testSaveReport() {
        // Create a sample report
        Report report = new Report();
        report.setId(1L);
        report.setReportdesc("Test Report");
        
        // Mock the behavior of reportRepository.save()
        when(reportRepository.save(any(Report.class))).thenReturn(report);
        
        // Call the saveReport() method
        Report savedReport = reportService.saveReport(report);
        
        // Verify the response
        assertEquals(report, savedReport);
        
        // Verify that reportRepository.save() was called once
        verify(reportRepository, times(1)).save(any(Report.class));
    }
    
    @Test
    public void testGetReportById() {
        // Create a sample report
        Report report = new Report();
        report.setId(1L);
        report.setReportdesc("Test Report");
        
        // Mock the behavior of reportRepository.findById()
        when(reportRepository.findById(1L)).thenReturn(Optional.of(report));
        
        // Call the getReportById() method
        Report retrievedReport = reportService.getReportById(1L);
        
        // Verify the response
        assertEquals(report, retrievedReport);
        
        // Verify that reportRepository.findById() was called once with the correct report ID
        verify(reportRepository, times(1)).findById(1L);
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
        // Mock the behavior of reportRepository.findAll()
        when(reportRepository.findAll()).thenReturn(reports);
        
        // Call the getAllReports() method
        List<Report> retrievedReports = reportService.getallReports();
        
        // Verify the response
        assertEquals(reports, retrievedReports);
        
        // Verify that reportRepository.findAll() was called once
        verify(reportRepository, times(1)).findAll();
    }
}
