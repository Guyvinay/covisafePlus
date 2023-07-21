package com.covisafe.service;

import java.util.List;

import com.covisafe.modal.Appointment;

public interface AppointmentService {
	public List<Appointment> getAllAppointment();
	public Appointment getAppointment(Long bookingId);
	public Appointment addAppointment(Appointment app);
	public Appointment updateAppointment(Appointment app);
	public Boolean deleteAppointment(Appointment app);
}
