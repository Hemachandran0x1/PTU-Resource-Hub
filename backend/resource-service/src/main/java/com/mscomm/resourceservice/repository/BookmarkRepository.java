package com.mscomm.resourceservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.resourceservice.entity.Bookmark;

public interface BookmarkRepository extends JpaRepository<Bookmark,Long> {

}
