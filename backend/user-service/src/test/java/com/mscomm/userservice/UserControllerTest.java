package com.mscomm.userservice;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.mscomm.userservice.controller.UserController;
import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.exceptions.UserNotFoundException;
import com.mscomm.userservice.requestobjects.Login;
import com.mscomm.userservice.service.impl.UserServiceImpl;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserControllerTest {

    @Mock
    private UserServiceImpl userService;

    @InjectMocks
    private UserController userController;

    @Test
    public void testSaveUser_ValidUser_UserObjectReturned() {
        // Arrange
        User user = new User();
        User savedUser = new User();

        when(userService.register(user)).thenReturn(savedUser);

        // Act
        ResponseEntity<User> response = userController.saveUser(user);

        // Assert
        assertNotNull(response);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(savedUser, response.getBody());

        verify(userService, times(1)).register(user);
    }

    @Test
    public void testLoginUser_ValidCredentials_UserObjectReturned() {
        // Arrange
        Login login = new Login();
        login.setEmail("test@example.com");
        login.setPassword("password");
        User user = new User();

        when(userService.login(login.getEmail(), login.getPassword())).thenReturn(user);

        // Act
        ResponseEntity<?> response = userController.loginuser(login);

        // Assert
        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(user, response.getBody());

        verify(userService, times(1)).login(login.getEmail(), login.getPassword());
    }

    @Test
    public void testLoginUser_InvalidCredentials_BadRequestWithErrorMessageReturned() {
        // Arrange
        Login login = new Login();
        login.setEmail("test@example.com");
        login.setPassword("password");

        String errorMessage = "Invalid email or password";
        UserNotFoundException exception = new UserNotFoundException(errorMessage);

        when(userService.login(login.getEmail(), login.getPassword())).thenThrow(exception);

        // Act
        ResponseEntity<?> response = userController.loginuser(login);

        // Assert
        assertNotNull(response);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(errorMessage, response.getBody());

        verify(userService, times(1)).login(login.getEmail(), login.getPassword());
    }

    @Test
    public void testGetUser_ExistingUserId_UserObjectReturned() {
        // Arrange
        long userId = 1L;
        User user = new User();

        when(userService.getUser(userId)).thenReturn(user);

        // Act
        ResponseEntity<User> response = userController.getUser(userId);

        // Assert
        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(user, response.getBody());

        verify(userService, times(1)).getUser(userId);
    }
}
