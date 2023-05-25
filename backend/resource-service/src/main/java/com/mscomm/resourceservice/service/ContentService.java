package com.mscomm.resourceservice.service;

import java.util.List;


import com.mscomm.resourceservice.entity.Content;

public interface ContentService {
	Content saveContent(Content bk);
	Content getContent(Long id);
	List<Content> getallContents();
	List<Content> getallContentsbytype(Long topic,int type);

}
