package com.covisafe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covisafe.modal.Vaccine;

public interface VaccineRepository extends JpaRepository<Vaccine, Integer> {

}
