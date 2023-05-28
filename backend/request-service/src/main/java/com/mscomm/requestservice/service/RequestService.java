package com.mscomm.requestservice.service;

import java.util.List;

import com.mscomm.requestservice.entity.Request;

public interface RequestService {
  Request saveRequest(Request request);

  Request getRequestById(Long requestId);
	List<Request> getallRequests();
	List<Request> getallRequestsbyStatus(int s);

}
