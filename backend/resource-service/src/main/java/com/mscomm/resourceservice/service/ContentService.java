package com.mscomm.resourceservice.service;

import com.mscomm.resourceservice.entity.Content;

public interface ContentService {
	Content saveContent(Content bk);
	Content getContent(Long id);
}
