package com.mscomm.subjectservice;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.mscomm.subjectservice.controller.TopicController;
import com.mscomm.subjectservice.entity.Topic;
import com.mscomm.subjectservice.service.TopicService;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TopicControllerTest {

    @Mock
    private TopicService topicService;

    @InjectMocks
    private TopicController topicController;

    @Test
    public void testSaveTopic_ValidTopicObject_Success() {
        // Arrange
        Topic topic = new Topic();

        when(topicService.saveTopic(any(Topic.class))).thenReturn(topic);

        // Act
        ResponseEntity<Topic> response = topicController.saveTopic(topic);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(topic, response.getBody());

        verify(topicService, times(1)).saveTopic(any(Topic.class));
    }

    @Test
    public void testGetTopicById_ExistingTopicId_TopicObjectReturned() {
        // Arrange
        long topicId = 1L;
        Topic topic = new Topic();

        when(topicService.getTopic(topicId)).thenReturn(topic);

        // Act
        ResponseEntity<Topic> response = topicController.getTopicById(topicId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(topic, response.getBody());

        verify(topicService, times(1)).getTopic(topicId);
    }

    @Test
    public void testGetAllTopics_NonEmptyList_ListOfTopicsReturned() {
        // Arrange
        List<Topic> topics = new ArrayList<>();
        topics.add(new Topic());
        topics.add(new Topic());

        when(topicService.getallTopics()).thenReturn(topics);

        // Act
        ResponseEntity<?> response = topicController.saveUser();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(topics, response.getBody());

        verify(topicService, times(1)).getallTopics();
    }

    @Test
    public void testGetTopicsByUnitAndSubject_ValidUnitAndSubjectId_ListOfTopicsReturned() {
        // Arrange
        int unit = 2;
        long subjectId = 1L;
        List<Topic> topics = new ArrayList<>();
        topics.add(new Topic());
        topics.add(new Topic());

        when(topicService.getallTopicsByUnit(subjectId, unit)).thenReturn(topics);

        // Act
        ResponseEntity<?> response = topicController.gettopicbyunit(unit, subjectId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(topics, response.getBody());

        verify(topicService, times(1)).getallTopicsByUnit(subjectId, unit);
    }
}
