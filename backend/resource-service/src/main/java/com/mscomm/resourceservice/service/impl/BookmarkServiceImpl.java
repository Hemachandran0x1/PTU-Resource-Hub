package com.mscomm.resourceservice.service.impl;

import com.mscomm.resourceservice.entity.Bookmark;
import com.mscomm.resourceservice.repository.BookmarkRepository;
import com.mscomm.resourceservice.service.*;
public class BookmarkServiceImpl implements BookmarkService{

	 private BookmarkRepository resourceRepository;
	@Override
	public Bookmark saveBookmark(Bookmark resource) {
	return resourceRepository.save(resource);
	}

	@Override
	public Bookmark getBookmark(Long resourceId) {
		 return resourceRepository.findById(resourceId).get();
	}

}
