package com.mscomm.subjectservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "topics")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Topic {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private Long subjectid;
	private String topicname;
}
