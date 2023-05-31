package com.mscomm.userservice;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.mscomm.userservice.controller.DepartmentController;
import com.mscomm.userservice.entity.Department;
import com.mscomm.userservice.service.DepartmentService;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

@ExtendWith(MockitoExtension.class)
public class DepartmentControllerTest {

    @Mock
    private DepartmentService departmentService;

    @InjectMocks
    private DepartmentController departmentController;

    @Test
    public void testGetAllDepartments_ValidDepartmentsList_ReturnsListOfDepartments() {
        // Arrange
        List<Department> departments = new ArrayList<>();
        departments.add(new Department());
        departments.add(new Department());

        when(departmentService.getallDepartments()).thenReturn(departments);

        // Act
        ResponseEntity<?> response = departmentController.saveUser();

        // Assert
        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(departments, response.getBody());

        verify(departmentService, times(1)).getallDepartments();
    }
}
