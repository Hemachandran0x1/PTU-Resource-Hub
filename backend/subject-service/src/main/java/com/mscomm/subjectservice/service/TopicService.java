package com.mscomm.subjectservice.service;
import java.util.List;


import com.mscomm.subjectservice.entity.*;

public interface TopicService {
	Topic saveTopic(Topic T);
	Topic getTopic(Long id);
	List<Topic> getTopicBySubject(Long Subjectid);
	List<Topic> getallTopics();

}
