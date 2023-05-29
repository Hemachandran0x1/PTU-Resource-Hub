package com.mscomm.requestservice.service.impl;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.mscomm.requestservice.dto.RequestDto;
import com.mscomm.requestservice.dto.ResponseDto;
import com.mscomm.requestservice.dto.UserDto;
import com.mscomm.requestservice.entity.Request;
import com.mscomm.requestservice.repository.RequestRepository;
import com.mscomm.requestservice.service.RequestService;


import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class RequestServiceImpl implements RequestService {
	 private RestTemplate restTemplate;
	 private RequestRepository requestRepository;
	@Override
	public Request saveRequest(Request request) {
		request.setStatus(0);
	return requestRepository.save(request);
	}

	@Override
	public Request getRequestById(Long requestId) {
		 return requestRepository.findById(requestId).get();
	}
	@Override
	public List<Request> getallRequests()
	{
		 List<Request> requests = new ArrayList<>();
		 requestRepository.findAll().forEach(requests::add);
	     return requests;
	}
	@Override
	public List<Request> getallRequestsbyStatus(int s)
	{
		 List<Request> requests = new ArrayList<>();
		 requestRepository.findByStatus(s).forEach(requests::add);
	     return requests;
	}
	@Override
	public List<ResponseDto> getUserAndRequests() {

        ResponseDto responseDto = new ResponseDto();
        List<Request> rs = new ArrayList<>();
        rs = requestRepository.findAll();
        List<ResponseDto> res=new ArrayList<>();
        RequestDto bmDto ;
        for(int i = 0; i < rs.size(); i++)
        { 	Request r=rs.get(i);
        	if(r.getStatus()!=0)
        		continue;
        	bmDto = mapToRequest(r);
        	ResponseEntity<UserDto> responseEntity = restTemplate.getForEntity("http://user-service:8080/api/users/" + r.getUserid(),
                UserDto.class);

        UserDto userDto = responseEntity.getBody();
        System.out.println(responseEntity.getStatusCode());
        responseDto.setRequest(bmDto);
        responseDto.setUser(userDto);
        res.add(new ResponseDto(bmDto,userDto));
        }

        return res;
	}
	private RequestDto mapToRequest(Request request){
        RequestDto requestDto = new RequestDto();
        requestDto.setUserid(request.getUserid());
        requestDto.setStatus(request.getStatus());
        requestDto.setRequestdesc(request.getRequestdesc());
        return requestDto;
    }
}
