package com.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.model.EleBillModel;

@Repository
public interface EleBillRepo extends JpaRepository<EleBillModel, Integer> 
{

}
