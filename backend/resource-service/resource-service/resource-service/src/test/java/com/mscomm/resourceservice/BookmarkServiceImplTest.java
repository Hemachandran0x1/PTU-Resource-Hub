package com.mscomm.resourceservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.mscomm.resourceservice.dto.BookmarkDto;
import com.mscomm.resourceservice.dto.ResponseDto;
import com.mscomm.resourceservice.dto.UserDto;
import com.mscomm.resourceservice.entity.Bookmark;
import com.mscomm.resourceservice.repository.BookmarkRepository;
import com.mscomm.resourceservice.service.impl.BookmarkServiceImpl;

public class BookmarkServiceImplTest {

    @Mock
    private BookmarkRepository bookmarkRepository;

    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private BookmarkServiceImpl bookmarkService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testSaveBookmark() {
        Bookmark bookmark = new Bookmark();
        bookmark.setId(1L);
        bookmark.setContentid(123L);
        bookmark.setBookmarkname("Test Bookmark");

        when(bookmarkRepository.save(bookmark)).thenReturn(bookmark);

        Bookmark savedBookmark = bookmarkService.saveBookmark(bookmark);

        assertEquals(bookmark.getId(), savedBookmark.getId());
        assertEquals(bookmark.getContentid(), savedBookmark.getContentid());
        assertEquals(bookmark.getBookmarkname(), savedBookmark.getBookmarkname());

        verify(bookmarkRepository, times(1)).save(bookmark);
    }

    @Test
    public void testGetBookmark() {
        Long bookmarkId = 1L;
        Bookmark bookmark = new Bookmark();
        bookmark.setId(bookmarkId);

        when(bookmarkRepository.findById(bookmarkId)).thenReturn(Optional.of(bookmark));

        Bookmark retrievedBookmark = bookmarkService.getBookmark(bookmarkId);

        assertEquals(bookmark, retrievedBookmark);

        verify(bookmarkRepository, times(1)).findById(bookmarkId);
    }

    @Test
    public void testGetUser() {
        Long bookmarkId = 1L;
        Bookmark bookmark = new Bookmark();
        bookmark.setId(bookmarkId);
        bookmark.setUserid(100L);

        BookmarkDto bookmarkDto = new BookmarkDto();
        bookmarkDto.setId(bookmarkId);
        bookmarkDto.setContentid(123L);
        bookmarkDto.setBookmarkname("Test Bookmark");

        UserDto userDto = new UserDto();
        
        userDto.setName("John Doe");
        userDto.setEmail("John Doe");
        userDto.setPassword("John Doe");
        userDto.setDepartmentid("John Doe");
        userDto.setSemesterid("John Doe");
        userDto.setRole("John Doe");

        ResponseEntity<UserDto> responseEntity = new ResponseEntity<>(userDto, HttpStatus.OK);

        when(bookmarkRepository.findById(bookmarkId)).thenReturn(Optional.of(bookmark));
        when(restTemplate.getForEntity("http://user-service:8080/api/users/" + bookmark.getUserid(), UserDto.class))
                .thenReturn(responseEntity);

        ResponseDto responseDto = bookmarkService.getUser(bookmarkId);

//        assertEquals(bookmarkDto, responseDto.getBookmarkdto());
//        assertEquals(userDto, responseDto.getUserdto());
//
//        verify(bookmarkRepository, times(1)).findById(bookmarkId);
//        verify(restTemplate, times(1))
//                .getForEntity("http://user-service:8080/api/users/" + bookmark.getUserid(), UserDto.class);
    }

    @Test
    public void testGetAllBookmarks() {
        List<Bookmark> bookmarks = new ArrayList<>();
        bookmarks.add(new Bookmark());
        bookmarks.add(new Bookmark());

        when(bookmarkRepository.findAll()).thenReturn(bookmarks);

        List<Bookmark> retrievedBookmarks = bookmarkService.getallBookmarks();

        assertEquals(bookmarks, retrievedBookmarks);

        verify(bookmarkRepository, times(1)).findAll();
    }

    @Test
    public void testGetAllBookmarksByUser() {
        Long userId = 100L;

        List<Bookmark> bookmarks = new ArrayList<>();
        bookmarks.add(new Bookmark());
        bookmarks.add(new Bookmark());

        when(bookmarkRepository.findByUserid(userId)).thenReturn(bookmarks);

        List<Bookmark> retrievedBookmarks = bookmarkService.getallBookmarksbyUser(userId);

        assertEquals(bookmarks, retrievedBookmarks);

        verify(bookmarkRepository, times(1)).findByUserid(userId);
    }

    @Test
    public void testDeleteBookmark() {
        Long bookmarkId = 1L;
        Long userId = 100L;

        Bookmark bookmark = new Bookmark();
        bookmark.setId(bookmarkId);
        bookmark.setUserid(userId);

        when(bookmarkRepository.findByIdAndUserid(bookmarkId, userId)).thenReturn(bookmark);

        String message = bookmarkService.deleteBookmark(bookmarkId, userId);

        assertEquals("Bookmark with id: " + bookmarkId + " for user with id " + userId + " deleted successfully!", message);

        verify(bookmarkRepository, times(1)).findByIdAndUserid(bookmarkId, userId);
        verify(bookmarkRepository, times(1)).deleteById(bookmark.getId());
    }
}
