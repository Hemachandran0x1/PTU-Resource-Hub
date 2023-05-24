package com.mscomm.contributeservice.service;
import java.util.List;

import com.mscomm.contributeservice.entity.*;

public interface ContributeService {
  Contribute saveContribute(Contribute contribute);

  Contribute getContributeById(Long contributeId);
	List<Contribute> getallContributes();

}
