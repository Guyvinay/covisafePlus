package com.covisafe.service;

import com.covisafe.modal.Appointment;

public interface AppointmentService {

	public Appointment getAppointmentDetails(Integer bookingId);
	public Appointment addAppointment(Appointment appointment);
	public Appointment updateAppointment(Integer bookingId , Appointment appointment);
	public Appointment deleteAppointment(Integer bookingId);
}
