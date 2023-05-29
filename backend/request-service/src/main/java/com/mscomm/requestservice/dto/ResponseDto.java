package com.mscomm.requestservice.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDto {
	private RequestDto request;
	private UserDto user;
	
}
