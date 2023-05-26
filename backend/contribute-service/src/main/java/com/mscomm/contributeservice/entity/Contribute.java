package com.mscomm.contributeservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "contribute")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Contribute {
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long id;
	  private String subject;
	  private String unit;
	  private String topic;
	  private String description;
	  private String url;
	  private int approve;
	  
	  
	  
}
