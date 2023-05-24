package com.mscomm.subjectservice.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.mscomm.subjectservice.entity.Topic;
import com.mscomm.subjectservice.repository.TopicRepository;
import com.mscomm.subjectservice.service.TopicService;

public class TopicServiceImpl implements TopicService{

	 private TopicRepository topicRepository;
	@Override
	public Topic saveTopic(Topic topic) {
	return topicRepository.save(topic);
	}

	@Override
	public Topic getTopic(Long topicId) {
		 return topicRepository.findById(topicId).get();
	}
	@Override
	public List<Topic> getTopicBySubject(Long sid)
	{
		List<Topic> topics = new ArrayList<Topic>();
		//Write implementation
		return topics;
		
	}

}
