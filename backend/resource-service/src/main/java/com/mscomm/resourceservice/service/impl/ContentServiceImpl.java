package com.mscomm.resourceservice.service.impl;

import com.mscomm.resourceservice.entity.Content;
import com.mscomm.resourceservice.repository.ContentRepository;
import com.mscomm.resourceservice.service.ContentService;

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

}
