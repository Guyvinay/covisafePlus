package com.covisafe.service;

import java.util.List;

import com.covisafe.modal.Appointment;

public interface AppointmentService {

	public Appointment getAppointmentDetails(String bookingId);
	public Appointment addAppointment(String memberid ,String vaxcenterid , Appointment appointment);
	public Appointment updateAppointment(String bookingId , Appointment appointment);
	public Appointment deleteAppointment(String bookingId);
    public List<Appointment> getAllAppointments();

}
