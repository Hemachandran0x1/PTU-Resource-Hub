package com.mscomm.resourceservice.service;

import java.util.List;


import com.mscomm.resourceservice.dto.ResponseDto;
import com.mscomm.resourceservice.entity.Bookmark;

public interface BookmarkService {
	Bookmark saveBookmark(Bookmark bk);
	Bookmark getBookmark(Long id);
	ResponseDto getUser(Long userId);
	List<Bookmark> getallBookmarks();

}
