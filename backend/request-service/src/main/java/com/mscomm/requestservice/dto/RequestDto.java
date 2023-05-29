package com.mscomm.requestservice.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RequestDto {
	private Long userid;
	private String requestdesc;
	private int status;
}
