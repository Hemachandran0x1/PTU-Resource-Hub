package com.mscomm.resourceservice.service;

import com.mscomm.resourceservice.entity.Bookmark;

public interface BookmarkService {
	Bookmark saveBookmark(Bookmark bk);
	Bookmark getBookmark(Long id);
}
