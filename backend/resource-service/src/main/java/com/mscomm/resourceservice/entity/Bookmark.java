package com.mscomm.resourceservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "bookmark")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Bookmark {

	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	  	private Long contentid;
	  	private String bookmarkname;
	  	private String url;
	  	private Long userid;
}
