package com.mscomm.resourceservice;

import com.mscomm.resourceservice.controller.BookmarkController;
import com.mscomm.resourceservice.dto.ResponseDto;
import com.mscomm.resourceservice.entity.Bookmark;
import com.mscomm.resourceservice.service.BookmarkService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

class BookmarkControllerTest {

    @Mock
    private BookmarkService bookmarkService;

    @InjectMocks
    private BookmarkController bookmarkController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void saveBookmark_shouldReturnCreatedStatus() {
        // Arrange
        Bookmark bookmark = new Bookmark();
        when(bookmarkService.saveBookmark(any(Bookmark.class))).thenReturn(bookmark);

        // Act
        ResponseEntity<Bookmark> response = bookmarkController.saveBookmark(bookmark);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(bookmark, response.getBody());
    }

    @Test
    void getBookmarkById_shouldReturnBookmark() {
        // Arrange
        Long bookmarkId = 1L;
        Bookmark bookmark = new Bookmark();
        when(bookmarkService.getBookmark(anyLong())).thenReturn(bookmark);

        // Act
        ResponseEntity<Bookmark> response = bookmarkController.getBookmarkById(bookmarkId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(bookmark, response.getBody());
    }

    @Test
    void saveUser_shouldReturnAllBookmarks() {
        // Arrange
        List<Bookmark> bookmarks = new ArrayList<>();
        when(bookmarkService.getallBookmarks()).thenReturn(bookmarks);

        // Act
        ResponseEntity<?> response = bookmarkController.saveUser();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(bookmarks, response.getBody());
    }

    @Test
    void saveUser_withUserId_shouldReturnBookmarksByUser() {
        // Arrange
        Long userId = 1L;
        List<Bookmark> bookmarks = new ArrayList<>();
        when(bookmarkService.getallBookmarksbyUser(anyLong())).thenReturn(bookmarks);

        // Act
        ResponseEntity<?> response = bookmarkController.getBookmarks(userId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(bookmarks, response.getBody());
    }

    @Test
    void deleteBookmark_withUserIdAndBookmarkId_shouldReturnOkStatus() {
        // Arrange
        Long userId = 1L;
        Long bookmarkId = 2L;
        String message = "Bookmark deleted";
        when(bookmarkService.deleteBookmark(anyLong(), anyLong())).thenReturn(message);

        // Act
        ResponseEntity<String> response = bookmarkController.deleteBookmark(bookmarkId, userId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(message, response.getBody());
    }

    @Test
    void getUser_withBookmarkId_shouldReturnUser() {
        // Arrange
        Long bookmarkId = 1L;
        ResponseDto user = new ResponseDto();
        when(bookmarkService.getUser(anyLong())).thenReturn(user);

        // Act
        ResponseEntity<?> response = bookmarkController.getUser(bookmarkId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(user, response.getBody());
    }
}
