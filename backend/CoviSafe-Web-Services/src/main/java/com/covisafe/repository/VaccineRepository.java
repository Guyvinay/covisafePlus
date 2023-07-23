package com.covisafe.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covisafe.modal.Vaccine;

public interface VaccineRepository extends JpaRepository<Vaccine, Integer> {

	public Optional<Vaccine> findByVaxName(String vaccine);
	
}
