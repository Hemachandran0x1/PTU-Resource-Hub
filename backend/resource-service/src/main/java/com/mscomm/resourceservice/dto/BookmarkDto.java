package com.mscomm.resourceservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BookmarkDto {
	 	private Long id;
	  	private Long contentid;
	  	private String bookmarkname;
}
