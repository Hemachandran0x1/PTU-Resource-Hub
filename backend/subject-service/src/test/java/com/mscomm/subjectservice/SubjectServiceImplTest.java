package com.mscomm.subjectservice;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.mscomm.subjectservice.entity.Subject;
import com.mscomm.subjectservice.repository.SubjectRepository;
import com.mscomm.subjectservice.service.impl.SubjectServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class SubjectServiceImplTest {

    @Mock
    private SubjectRepository subjectRepository;

    @InjectMocks
    private SubjectServiceImpl subjectService;

    @Test
    public void testSaveSubject_ValidSubjectObject_Success() {
        // Arrange
        Subject subject = new Subject();

        when(subjectRepository.save(any(Subject.class))).thenReturn(subject);

        // Act
        Subject savedSubject = subjectService.saveSubject(subject);

        // Assert
        assertNotNull(savedSubject);

        verify(subjectRepository, times(1)).save(any(Subject.class));
    }

    @Test
    public void testGetSubject_ExistingSubjectId_SubjectObjectReturned() {
        // Arrange
        long subjectId = 1L;
        Subject subject = new Subject();

        when(subjectRepository.findById(subjectId)).thenReturn(Optional.of(subject));

        // Act
        Subject retrievedSubject = subjectService.getSubject(subjectId);

        // Assert
        assertNotNull(retrievedSubject);

        verify(subjectRepository, times(1)).findById(subjectId);
    }

    @Test
    public void testGetSubject_NonExistingSubjectId_ExceptionThrown() {
        // Arrange
        long subjectId = 1L;

        when(subjectRepository.findById(subjectId)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(NoSuchElementException.class, () -> {
            subjectService.getSubject(subjectId);
        });

        verify(subjectRepository, times(1)).findById(subjectId);
    }

    @Test
    public void testGetAllSubjects_NonEmptyDatabase_ListOfSubjectsReturned() {
        // Arrange
        List<Subject> subjects = new ArrayList<>();
        subjects.add(new Subject());
        subjects.add(new Subject());

        when(subjectRepository.findAll()).thenReturn(subjects);

        // Act
        List<Subject> allSubjects = subjectService.getallSubjects();

        // Assert
        assertNotNull(allSubjects);
        assertEquals(subjects.size(), allSubjects.size());

        verify(subjectRepository, times(1)).findAll();
    }
}
