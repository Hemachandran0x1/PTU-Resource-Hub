package com.mscomm.contributeservice.service.impl;
import java.util.ArrayList;
import java.util.List;

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
		contribute.setApprove(0);
	return contributeRepository.save(contribute);
	}

	@Override
	public Contribute getContributeById(Long contributeId) {
		 return contributeRepository.findById(contributeId).get();
	}
	@Override
	public List<Contribute> getallContributes()
	{
		 List<Contribute> contributes = new ArrayList<>();
		 contributeRepository.findAll().forEach(contributes::add);
	     return contributes;
	}
}