package com.mscomm.requestservice.service;

import com.mscomm.requestservice.entity.Request;

public interface RequestService {
  Request saveRequest(Request request);

  Request getRequestById(Long requestId);
}
