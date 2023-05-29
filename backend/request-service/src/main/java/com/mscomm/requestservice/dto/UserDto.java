package com.mscomm.requestservice.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
		private String name;
	    private String email;
	    private String password;	   
	    private String departmentid;
	    private  String semesterid;
	    private String role;
}


