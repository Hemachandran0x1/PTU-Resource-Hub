package com.mscomm.resourceservice.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.mscomm.resourceservice.entity.Content;
import com.mscomm.resourceservice.repository.ContentRepository;
import com.mscomm.resourceservice.service.ContentService;


import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ContentServiceImpl implements ContentService{
	 private ContentRepository resourceRepository;
		@Override
		public Content saveContent(Content resource) {
		return resourceRepository.save(resource);
		}

		@Override
		public Content getContent(Long resourceId) {
			 return resourceRepository.findById(resourceId).get();
		}
		@Override
		public List<Content> getallContents()
		{
			 List<Content> contents = new ArrayList<>();
			 resourceRepository.findAll().forEach(contents::add);
		     return contents;
		}

}
