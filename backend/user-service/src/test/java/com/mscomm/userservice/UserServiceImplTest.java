package com.mscomm.userservice;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.RestTemplate;

import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.exceptions.UserNotFoundException;
import com.mscomm.userservice.repository.UserRepository;
import com.mscomm.userservice.service.impl.UserServiceImpl;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private UserServiceImpl userService;

    @Test
    public void testRegister_ValidUser_UserObjectReturned() {
        // Arrange
        User user = new User();
        user.setRole("USER");

        when(userRepository.save(any(User.class))).thenReturn(user);

        // Act
        User registeredUser = userService.register(user);

        // Assert
        assertNotNull(registeredUser);
        assertEquals(user.getRole(), registeredUser.getRole());

        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    public void testLogin_ValidCredentials_UserObjectReturned() {
        // Arrange
        String email = "test@example.com";
        String password = "password";
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);

        when(userRepository.findByEmail(email)).thenReturn(user);

        // Act
        User loggedInUser = userService.login(email, password);

        // Assert
        assertNotNull(loggedInUser);
        assertEquals(user, loggedInUser);

        verify(userRepository, times(1)).findByEmail(email);
    }

    @Test
    public void testLogin_InvalidEmail_ThrowsUserNotFoundException() {
        // Arrange
        String email = "test@example.com";
        String password = "password";

        when(userRepository.findByEmail(email)).thenReturn(null);

        // Act & Assert
        assertThrows(UserNotFoundException.class, () -> {
            userService.login(email, password);
        });

        verify(userRepository, times(1)).findByEmail(email);
    }

    @Test
    public void testLogin_InvalidPassword_ThrowsUserNotFoundException() {
        // Arrange
        String email = "test@example.com";
        String password = "password";
        User user = new User();
        user.setEmail(email);
        user.setPassword("incorrect");

        when(userRepository.findByEmail(email)).thenReturn(user);

        // Act & Assert
        assertThrows(UserNotFoundException.class, () -> {
            userService.login(email, password);
        });

        verify(userRepository, times(1)).findByEmail(email);
    }

    @Test
    public void testGetUser_ExistingUserId_UserObjectReturned() {
        // Arrange
        long userId = 1L;
        User user = new User();

        when(userRepository.findById(userId)).thenReturn(java.util.Optional.of(user));

        // Act
        User retrievedUser = userService.getUser(userId);

        // Assert
        assertNotNull(retrievedUser);

        verify(userRepository, times(1)).findById(userId);
    }
}
