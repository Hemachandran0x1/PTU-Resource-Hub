package com.mscomm.requestservice.service.impl;
import org.springframework.stereotype.Service;

import com.mscomm.requestservice.entity.Request;
import com.mscomm.requestservice.repository.RequestRepository;
import com.mscomm.requestservice.service.RequestService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class RequestServiceImpl implements RequestService {
	 private RequestRepository requestRepository;
	@Override
	public Request saveRequest(Request request) {
	return requestRepository.save(request);
	}

	@Override
	public Request getRequestById(Long requestId) {
		 return requestRepository.findById(requestId).get();
	}

}
