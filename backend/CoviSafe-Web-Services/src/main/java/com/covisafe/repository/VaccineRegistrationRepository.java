package com.covisafe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covisafe.modal.VaccineRegistration;

public interface VaccineRegistrationRepository extends JpaRepository<VaccineRegistration, Integer> {

}
