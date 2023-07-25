package com.covisafe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covisafe.modal.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

}
