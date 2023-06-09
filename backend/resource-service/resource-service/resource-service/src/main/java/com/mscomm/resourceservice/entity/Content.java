package com.mscomm.resourceservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "content")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Content {

	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	  	private Long topicid;
	  	private String url;
	  	private Long subjectid;
	  	private Long unit;
	  	private int type;
	  	private String name;
}
