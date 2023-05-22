package com.mscomm.contributeservice.service.impl;
import org.springframework.stereotype.Service;

import com.mscomm.contributeservice.entity.Contribute;
import com.mscomm.contributeservice.repository.ContributeRepository;
import com.mscomm.contributeservice.service.ContributeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class ContributeServiceImpl implements ContributeService {
	 private ContributeRepository contributeRepository;
	@Override
	public Contribute saveContribute(Contribute contribute) {
	return contributeRepository.save(contribute);
	}

	@Override
	public Contribute getContributeById(Long contributeId) {
		 return contributeRepository.findById(contributeId).get();
	}
}
