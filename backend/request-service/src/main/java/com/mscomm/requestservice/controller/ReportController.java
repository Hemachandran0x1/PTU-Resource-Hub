package com.mscomm.requestservice.controller;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.requestservice.entity.Report;
import com.mscomm.requestservice.service.ReportService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/reports")
@AllArgsConstructor
public class ReportController {
	private ReportService reportService;

    @PostMapping
    public ResponseEntity<Report> saveReport(@RequestBody Report report){
        Report savedReport = reportService.saveReport(report);
        return new ResponseEntity<>(savedReport, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Report> getReportById(@PathVariable("id") Long reportId){
        Report report = reportService.getReportById(reportId);
        return ResponseEntity.ok(report);}
        @GetMapping
	    public ResponseEntity<?> saveUser(){
		 List<Report> reports = new ArrayList<>();
	        	reports=	reportService.getallReports();
	        return new ResponseEntity<>(reports, HttpStatus.OK);
	    }
}
    

