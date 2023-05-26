package com.mscomm.resourceservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.resourceservice.entity.Bookmark;

public interface BookmarkRepository extends JpaRepository<Bookmark,Long> {
List<Bookmark> findByUserid(Long id);
int deleteByIdAndUserid(Long bid,Long uid);
Bookmark findByIdAndUserid(Long bid,Long uid);
}
