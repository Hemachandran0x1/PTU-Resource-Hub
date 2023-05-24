package com.mscomm.subjectservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "subjects")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Subject {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private Long semid;
	private Long deptid;
	private String subjectname;
	private String subjectcode;
	private String syllabus;

}
