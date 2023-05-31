package com.mscomm.resourceservice;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;

import com.mscomm.resourceservice.entity.Content;
import com.mscomm.resourceservice.repository.ContentRepository;
import com.mscomm.resourceservice.service.impl.ContentServiceImpl;

public class ContentServiceImplTest {

    private ContentServiceImpl contentService;
    private ContentRepository contentRepository;

    @Before
    public void setUp() {
        contentRepository = mock(ContentRepository.class);
        contentService = new ContentServiceImpl(contentRepository);
    }

    @Test
    public void testSaveContent() {
        Content contentToSave = new Content();
        // Set up mock behavior
        when(contentRepository.save(contentToSave)).thenReturn(contentToSave);

        Content savedContent = contentService.saveContent(contentToSave);

        assertNotNull(savedContent);
        assertEquals(contentToSave, savedContent);
    }

    @Test
    public void testGetContent() {
        long resourceId = 1L;
        Content content = new Content();
        // Set up mock behavior
        when(contentRepository.findById(resourceId)).thenReturn(Optional.of(content));

        Content retrievedContent = contentService.getContent(resourceId);

        assertNotNull(retrievedContent);
        assertEquals(content, retrievedContent);
    }

    @Test
    public void testGetAllContents() {
        List<Content> allContents = new ArrayList<>();
        // Set up mock behavior
        when(contentRepository.findAll()).thenReturn(allContents);

        List<Content> retrievedContents = contentService.getallContents();

        assertNotNull(retrievedContents);
        assertEquals(allContents, retrievedContents);
    }

    @Test
    public void testGetAllContentsByType() {
        long topicId = 1L;
        int type = 2;
        List<Content> contentsByType = new ArrayList<>();
        // Set up mock behavior
        when(contentRepository.findByTopicidAndType(topicId, type)).thenReturn(contentsByType);

        List<Content> retrievedContents = contentService.getallContentsbytype(topicId, type);

        assertNotNull(retrievedContents);
        assertEquals(contentsByType, retrievedContents);
    }
}
