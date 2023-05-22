package com.mscomm.contributeservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.contributeservice.entity.Contribute;

public interface ContributeRepository extends JpaRepository<Contribute,Long>{

}
