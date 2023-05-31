package com.mscomm.userservice;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.mscomm.userservice.controller.SemesterController;
import com.mscomm.userservice.entity.Semester;
import com.mscomm.userservice.service.impl.SemesterServiceImpl;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

@ExtendWith(MockitoExtension.class)
public class SemesterControllerTest {

    @Mock
    private SemesterServiceImpl semesterService;

    @InjectMocks
    private SemesterController semesterController;

    @Test
    public void testGetAllSemesters_ValidSemestersList_ReturnsListOfSemesters() {
        // Arrange
        List<Semester> semesters = new ArrayList<>();
        semesters.add(new Semester());
        semesters.add(new Semester());

        when(semesterService.getallSemesters()).thenReturn(semesters);

        // Act
        ResponseEntity<?> response = semesterController.saveUser();

        // Assert
        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(semesters, response.getBody());

        verify(semesterService, times(1)).getallSemesters();
    }
}
