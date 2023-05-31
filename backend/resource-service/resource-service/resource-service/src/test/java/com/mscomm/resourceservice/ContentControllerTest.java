package com.mscomm.resourceservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.mscomm.resourceservice.controller.ContentController;
import com.mscomm.resourceservice.entity.Content;
import com.mscomm.resourceservice.service.ContentService;

class ContentControllerTest {

    private ContentController contentController;
    private ContentService contentService;

    @BeforeEach
    void setUp() {
        contentService = mock(ContentService.class);
        contentController = new ContentController(contentService);
    }

    @Test
    void saveContent_ValidContent_ReturnsCreatedResponse() {
        // Arrange
        Content content = new Content();
        when(contentService.saveContent(any(Content.class))).thenReturn(content);

        // Act
        ResponseEntity<Content> response = contentController.saveContent(content);

        // Assert
        verify(contentService, times(1)).saveContent(content);
        verifyNoMoreInteractions(contentService);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(content, response.getBody());
    }

    @Test
    void getContentById_ValidId_ReturnsContent() {
        // Arrange
        long contentId = 1L;
        Content content = new Content();
        when(contentService.getContent(contentId)).thenReturn(content);

        // Act
        ResponseEntity<Content> response = contentController.getContentById(contentId);

        // Assert
        verify(contentService, times(1)).getContent(contentId);
        verifyNoMoreInteractions(contentService);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(content, response.getBody());
    }

    @Test
    void getContents_ReturnsAllContents() {
        // Arrange
        List<Content> contents = new ArrayList<>();
        when(contentService.getallContents()).thenReturn(contents);

        // Act
        ResponseEntity<?> response = contentController.saveUser();

        // Assert
        verify(contentService, times(1)).getallContents();
        verifyNoMoreInteractions(contentService);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(contents, response.getBody());
    }

    @Test
    void getContentsByTypeAndTopic_ReturnsContentsByTypeAndTopic() {
        // Arrange
        long topic = 1L;
        int type = 2;
        List<Content> contents = new ArrayList<>();
        when(contentService.getallContentsbytype(topic, type)).thenReturn(contents);

        // Act
        ResponseEntity<?> response = contentController.getTopicbytype(topic, type);

        // Assert
        verify(contentService, times(1)).getallContentsbytype(topic, type);
        verifyNoMoreInteractions(contentService);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(contents, response.getBody());
    }
}
