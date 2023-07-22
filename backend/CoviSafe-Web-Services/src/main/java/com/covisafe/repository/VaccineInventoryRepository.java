package com.covisafe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covisafe.modal.VaccineInventory;

public interface VaccineInventoryRepository extends JpaRepository<VaccineInventory, Integer> {

	
	
}
