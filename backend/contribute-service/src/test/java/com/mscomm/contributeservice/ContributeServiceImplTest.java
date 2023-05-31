package com.mscomm.contributeservice;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.mscomm.contributeservice.entity.Contribute;
import com.mscomm.contributeservice.repository.ContributeRepository;
import com.mscomm.contributeservice.service.impl.ContributeServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ContributeServiceImplTest {

    @Mock
    private ContributeRepository contributeRepository;

    @InjectMocks
    private ContributeServiceImpl contributeService;

    @Test
    public void testSaveContribute_ValidContributeObject_Success() {
        // Arrange
        Contribute contribute = new Contribute();
        contribute.setApprove(0);

        when(contributeRepository.save(any(Contribute.class))).thenReturn(contribute);

        // Act
        Contribute savedContribute = contributeService.saveContribute(contribute);

        // Assert
        assertNotNull(savedContribute);
        assertEquals(0, savedContribute.getApprove());

        verify(contributeRepository, times(1)).save(any(Contribute.class));
    }

    /*@Test
    public void testSaveContribute_NullContributeObject_ExceptionThrown() {
        // Arrange

        // Act & Assert
        assertThrows(IllegalArgumentException.class, () -> {
            contributeService.saveContribute(null);
        });

        verifyNoInteractions(contributeRepository);
    }*/

    @Test
    public void testGetContributeById_ExistingId_ContributeObjectReturned() {
        // Arrange
        long contributeId = 1L;
        Contribute contribute = new Contribute();
        contribute.setId(contributeId);

        when(contributeRepository.findById(contributeId)).thenReturn(Optional.of(contribute));

        // Act
        Contribute retrievedContribute = contributeService.getContributeById(contributeId);

        // Assert
        assertNotNull(retrievedContribute);
        assertEquals(contributeId, retrievedContribute.getId());

        verify(contributeRepository, times(1)).findById(contributeId);
    }

    @Test
    public void testGetContributeById_NonExistingId_ExceptionThrown() {
        // Arrange
        long contributeId = 1L;

        when(contributeRepository.findById(contributeId)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(NoSuchElementException.class, () -> {
            contributeService.getContributeById(contributeId);
        });

        verify(contributeRepository, times(1)).findById(contributeId);
    }

    @Test
    public void testGetAllContributes_NonEmptyDatabase_ListOfContributesReturned() {
        // Arrange
        List<Contribute> contributes = new ArrayList<>();
        contributes.add(new Contribute());
        contributes.add(new Contribute());

        when(contributeRepository.findAll()).thenReturn(contributes);

        // Act
        List<Contribute> allContributes = contributeService.getallContributes();

        // Assert
        assertNotNull(allContributes);
        assertEquals(contributes.size(), allContributes.size());

        verify(contributeRepository, times(1)).findAll();
    }

    @Test
    public void testGetAllContributes_EmptyDatabase_EmptyListReturned() {
        // Arrange
        when(contributeRepository.findAll()).thenReturn(new ArrayList<>());

        // Act
        List<Contribute> allContributes = contributeService.getallContributes();

        // Assert
        assertNotNull(allContributes);
        assertTrue(allContributes.isEmpty());

        verify(contributeRepository, times(1)).findAll();
    }
}