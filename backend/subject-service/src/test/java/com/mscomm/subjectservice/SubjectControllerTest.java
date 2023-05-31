package com.mscomm.subjectservice;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.mscomm.subjectservice.controller.SubjectController;
import com.mscomm.subjectservice.entity.Subject;
import com.mscomm.subjectservice.service.impl.SubjectServiceImpl;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class SubjectControllerTest {

    @Mock
    private SubjectServiceImpl subjectService;

    @InjectMocks
    private SubjectController subjectController;

    @Test
    public void testSaveSubject_ValidSubjectObject_Success() {
        // Arrange
        Subject subject = new Subject();

        when(subjectService.saveSubject(any(Subject.class))).thenReturn(subject);

        // Act
        ResponseEntity<Subject> response = subjectController.saveSubject(subject);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(subject, response.getBody());

        verify(subjectService, times(1)).saveSubject(any(Subject.class));
    }

    @Test
    public void testGetSubjectById_ExistingSubjectId_SubjectObjectReturned() {
        // Arrange
        long subjectId = 1L;
        Subject subject = new Subject();

        when(subjectService.getSubject(subjectId)).thenReturn(subject);

        // Act
        ResponseEntity<Subject> response = subjectController.getSubjectById(subjectId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(subject, response.getBody());

        verify(subjectService, times(1)).getSubject(subjectId);
    }

    @Test
    public void testGetAllSubjects_NonEmptyList_ListOfSubjectsReturned() {
        // Arrange
        List<Subject> subjects = new ArrayList<>();
        subjects.add(new Subject());
        subjects.add(new Subject());

        when(subjectService.getallSubjects()).thenReturn(subjects);

        // Act
        ResponseEntity<?> response = subjectController.saveUser();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(subjects, response.getBody());

        verify(subjectService, times(1)).getallSubjects();
    }
}
