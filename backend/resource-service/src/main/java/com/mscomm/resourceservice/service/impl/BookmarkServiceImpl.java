package com.mscomm.resourceservice.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.mscomm.resourceservice.dto.BookmarkDto;
import com.mscomm.resourceservice.dto.ResponseDto;
import com.mscomm.resourceservice.dto.UserDto;
import com.mscomm.resourceservice.entity.Bookmark;
import com.mscomm.resourceservice.repository.BookmarkRepository;
import com.mscomm.resourceservice.service.*;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BookmarkServiceImpl implements BookmarkService{

	 private BookmarkRepository resourceRepository;
	    private RestTemplate restTemplate;

	@Override
	public Bookmark saveBookmark(Bookmark resource) {
	return resourceRepository.save(resource);
	}

	@Override
	public Bookmark getBookmark(Long resourceId) {
		 return resourceRepository.findById(resourceId).get();
	}
	@Override
	public ResponseDto getUser(Long bmId) {

        ResponseDto responseDto = new ResponseDto();
        Bookmark bm = resourceRepository.findById(bmId).get();
        BookmarkDto bmDto = mapToBookmark(bm);

        ResponseEntity<UserDto> responseEntity = restTemplate
                .getForEntity("http://user-service:8080/api/users/" + bm.getUserid(),
                UserDto.class);

        UserDto userDto = responseEntity.getBody();

        System.out.println(responseEntity.getStatusCode());

        responseDto.setBookmarkdto(bmDto);
        responseDto.setUserdto(userDto);

        return responseDto;
	}
	private BookmarkDto mapToBookmark(Bookmark bookmark){
        BookmarkDto bookmarkDto = new BookmarkDto();
        bookmarkDto.setId(bookmark.getId());
        bookmarkDto.setContentid(bookmark.getContentid());
        bookmarkDto.setBookmarkname(bookmark.getBookmarkname());
        return bookmarkDto;
    }
	@Override
	public List<Bookmark> getallBookmarks()
	{
		 List<Bookmark> bookmarks = new ArrayList<>();
		 resourceRepository.findAll().forEach(bookmarks::add);
	     return bookmarks;
	}
	@Override
	public List<Bookmark> getallBookmarksbyUser(Long userid)
	{
		 List<Bookmark> bookmarks = new ArrayList<>();
		 resourceRepository.findByUserid(userid).forEach(bookmarks::add);
	     return bookmarks;
	}
	@Override
	public String deleteBookmark(Long bid,Long uid)
	{	 int status=0;
		 String m;
		 Bookmark bm = resourceRepository.findByIdAndUserid(bid,uid);
		 Long id = bm.getId();
		
	     try
		 {resourceRepository.deleteById(id);
		 status=1;}
	     finally
	     {if(status>0)
	     {
	    	 m= "Bookmark with id: " + bid + "  for user with id "+uid+"deleted successfully!";
	     }else
	     {
	    	 m="Unsucessfull bookmark deletion";
	     }
	     }
	     return m;
	}
}
