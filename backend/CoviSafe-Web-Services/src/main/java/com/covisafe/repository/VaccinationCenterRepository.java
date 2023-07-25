package com.covisafe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covisafe.modal.VaccinationCenter;

public interface VaccinationCenterRepository extends JpaRepository<VaccinationCenter, Integer> {

}
