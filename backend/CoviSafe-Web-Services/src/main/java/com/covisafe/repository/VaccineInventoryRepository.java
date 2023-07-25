package com.covisafe.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covisafe.modal.VaccineInventory;

public interface VaccineInventoryRepository extends JpaRepository<VaccineInventory, Integer> {

	public List<VaccineInventory> findVaccineInventoryByDate(LocalDate date);
	
}
