package com.mscomm.subjectservice;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.mscomm.subjectservice.entity.Topic;
import com.mscomm.subjectservice.repository.TopicRepository;
import com.mscomm.subjectservice.service.impl.TopicServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TopicServiceImplTest {

    @Mock
    private TopicRepository topicRepository;

    @InjectMocks
    private TopicServiceImpl topicService;

    @Test
    public void testSaveTopic_ValidTopicObject_Success() {
        // Arrange
        Topic topic = new Topic();

        when(topicRepository.save(any(Topic.class))).thenReturn(topic);

        // Act
        Topic savedTopic = topicService.saveTopic(topic);

        // Assert
        assertNotNull(savedTopic);

        verify(topicRepository, times(1)).save(any(Topic.class));
    }

    @Test
    public void testGetTopic_ExistingTopicId_TopicObjectReturned() {
        // Arrange
        long topicId = 1L;
        Topic topic = new Topic();

        when(topicRepository.findById(topicId)).thenReturn(Optional.of(topic));

        // Act
        Topic retrievedTopic = topicService.getTopic(topicId);

        // Assert
        assertNotNull(retrievedTopic);

        verify(topicRepository, times(1)).findById(topicId);
    }

    @Test
    public void testGetTopic_NonExistingTopicId_ExceptionThrown() {
        // Arrange
        long topicId = 1L;

        when(topicRepository.findById(topicId)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(NoSuchElementException.class, () -> {
            topicService.getTopic(topicId);
        });

        verify(topicRepository, times(1)).findById(topicId);
    }

    @Test
    public void testGetTopicBySubject_ValidSubjectId_ListOfTopicsReturned() {
        // Arrange
        long subjectId = 1L;
        List<Topic> topics = new ArrayList<>();
        topics.add(new Topic());
        topics.add(new Topic());

        when(topicRepository.findBySubjectid(subjectId)).thenReturn(topics);

        // Act
        List<Topic> retrievedTopics = topicService.getTopicBySubject(subjectId);

        // Assert
        assertNotNull(retrievedTopics);
        assertEquals(topics.size(), retrievedTopics.size());

        verify(topicRepository, times(1)).findBySubjectid(subjectId);
    }

    @Test
    public void testGetAllTopics_NonEmptyDatabase_ListOfTopicsReturned() {
        // Arrange
        List<Topic> topics = new ArrayList<>();
        topics.add(new Topic());
        topics.add(new Topic());

        when(topicRepository.findAll()).thenReturn(topics);

        // Act
        List<Topic> allTopics = topicService.getallTopics();

        // Assert
        assertNotNull(allTopics);
        assertEquals(topics.size(), allTopics.size());

        verify(topicRepository, times(1)).findAll();
    }

    @Test
    public void testGetAllTopicsByUnit_ValidSubjectIdAndUnit_ListOfTopicsReturned() {
        // Arrange
        long subjectId = 1L;
        int unit = 2;
        List<Topic> topics = new ArrayList<>();
        topics.add(new Topic());
        topics.add(new Topic());

        when(topicRepository.findBySubjectidAndUnit(subjectId, unit)).thenReturn(topics);

        // Act
        List<Topic> retrievedTopics = topicService.getallTopicsByUnit(subjectId, unit);

        // Assert
        assertNotNull(retrievedTopics);
        assertEquals(topics.size(), retrievedTopics.size());

        verify(topicRepository, times(1)).findBySubjectidAndUnit(subjectId, unit);
    }
}
