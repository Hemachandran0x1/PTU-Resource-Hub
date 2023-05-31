package com.mscomm.contributeservice;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.mscomm.contributeservice.controller.ContributeController;
import com.mscomm.contributeservice.entity.Contribute;
import com.mscomm.contributeservice.service.impl.ContributeServiceImpl;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ContributeControllerTest {

    @Mock
    private ContributeServiceImpl contributeService;

    @InjectMocks
    private ContributeController contributeController;

    @Test
    public void testSaveContribute_ValidContributeObject_Success() {
        // Arrange
        Contribute contribute = new Contribute();

        when(contributeService.saveContribute(any(Contribute.class))).thenReturn(contribute);

        // Act
        ResponseEntity<Contribute> response = contributeController.saveContribute(contribute);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(contribute, response.getBody());

        verify(contributeService, times(1)).saveContribute(any(Contribute.class));
    }

    @Test
    public void testGetContributeById_ExistingId_ContributeObjectReturned() {
        // Arrange
        long contributeId = 1L;
        Contribute contribute = new Contribute();

        when(contributeService.getContributeById(contributeId)).thenReturn(contribute);

        // Act
        ResponseEntity<Contribute> response = contributeController.getContributeById(contributeId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(contribute, response.getBody());

        verify(contributeService, times(1)).getContributeById(contributeId);
    }

    @Test
    public void testGetAllContributes_NonEmptyList_ListOfContributesReturned() {
        // Arrange
        List<Contribute> contributes = new ArrayList<>();
        contributes.add(new Contribute());
        contributes.add(new Contribute());

        when(contributeService.getallContributes()).thenReturn(contributes);

        // Act
        ResponseEntity<?> response = contributeController.saveUser();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(contributes, response.getBody());

        verify(contributeService, times(1)).getallContributes();
    }
}

