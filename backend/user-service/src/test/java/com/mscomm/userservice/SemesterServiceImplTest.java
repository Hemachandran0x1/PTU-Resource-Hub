package com.mscomm.userservice;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.mscomm.userservice.entity.Semester;
import com.mscomm.userservice.repository.SemesterRepository;
import com.mscomm.userservice.service.impl.SemesterServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class SemesterServiceImplTest {

    @Mock
    private SemesterRepository semesterRepository;

    @InjectMocks
    private SemesterServiceImpl semesterService;

    @Test
    public void testGetSemesterById_ExistingSemesterId_SemesterObjectReturned() {
        // Arrange
        long semesterId = 1L;
        Semester semester = new Semester();

        when(semesterRepository.findById(semesterId)).thenReturn(Optional.of(semester));

        // Act
        Semester retrievedSemester = semesterService.getSemesterbyid(semesterId);

        // Assert
        assertNotNull(retrievedSemester);

        verify(semesterRepository, times(1)).findById(semesterId);
    }

    @Test
    public void testGetSemesterById_NonExistingSemesterId_ExceptionThrown() {
        // Arrange
        long semesterId = 1L;

        when(semesterRepository.findById(semesterId)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(NoSuchElementException.class, () -> {
            semesterService.getSemesterbyid(semesterId);
        });

        verify(semesterRepository, times(1)).findById(semesterId);
    }

    @Test
    public void testGetAllSemesters_NonEmptyDatabase_ListOfSemestersReturned() {
        // Arrange
        List<Semester> semesters = new ArrayList<>();
        semesters.add(new Semester());
        semesters.add(new Semester());

        when(semesterRepository.findAll()).thenReturn(semesters);

        // Act
        List<Semester> allSemesters = semesterService.getallSemesters();

        // Assert
        assertNotNull(allSemesters);
        assertEquals(semesters.size(), allSemesters.size());

        verify(semesterRepository, times(1)).findAll();
    }
}
