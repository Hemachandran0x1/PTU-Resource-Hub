package com.mscomm.userservice;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.mscomm.userservice.entity.Department;
import com.mscomm.userservice.repository.DepartmentRepository;
import com.mscomm.userservice.service.impl.DepartmentServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class DepartmentServiceImplTest {

    @Mock
    private DepartmentRepository departmentRepository;

    @InjectMocks
    private DepartmentServiceImpl departmentService;

    @Test
    public void testGetDepartment_ExistingDepartmentId_DepartmentObjectReturned() {
        // Arrange
        long departmentId = 1L;
        Department department = new Department();

        when(departmentRepository.findById(departmentId)).thenReturn(Optional.of(department));

        // Act
        Department retrievedDepartment = departmentService.getDepartment(departmentId);

        // Assert
        assertNotNull(retrievedDepartment);

        verify(departmentRepository, times(1)).findById(departmentId);
    }

    @Test
    public void testGetDepartment_NonExistingDepartmentId_ExceptionThrown() {
        // Arrange
        long departmentId = 1L;

        when(departmentRepository.findById(departmentId)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(NoSuchElementException.class, () -> {
            departmentService.getDepartment(departmentId);
        });

        verify(departmentRepository, times(1)).findById(departmentId);
    }

    @Test
    public void testGetAllDepartments_NonEmptyDatabase_ListOfDepartmentsReturned() {
        // Arrange
        List<Department> departments = new ArrayList<>();
        departments.add(new Department());
        departments.add(new Department());

        when(departmentRepository.findAll()).thenReturn(departments);

        // Act
        List<Department> allDepartments = departmentService.getallDepartments();

        // Assert
        assertNotNull(allDepartments);
        assertEquals(departments.size(), allDepartments.size());

        verify(departmentRepository, times(1)).findAll();
    }
}
