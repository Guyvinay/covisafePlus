package com.covisafe.service.SerImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covisafe.exception.AppointmentNotFoundException;
import com.covisafe.modal.Appointment;
import com.covisafe.repository.AppointmentRepository;
import com.covisafe.service.AppointmentService;

@Service
public class AppointmentServiceImpl implements AppointmentService{

	@Autowired
	private AppointmentRepository appointmentRepository;

	@Override
	public Appointment getAppointmentDetails(Integer bookingId) {
//		Optional<Appointment> optional = appointmentRepository.findById(bookingId);
//		if(optional.isEmpty()) throw new AppointmentNotFoundException("Appointment Not Found by Given Id, Please get an Appointment first");
		Appointment appointment = appointmentRepository.findById(bookingId).orElseThrow(()-> new AppointmentNotFoundException("Appointment Not Found by Given Id, Please get an Appointment first"));
		return appointment;
	}

	@Override
	public Appointment addAppointment(Appointment appointment) {
		if(appointment!=null) throw new AppointmentNotFoundException("Appointment couldn't saved");
		Appointment appoint = appointmentRepository.save(appointment);
		return appoint;
	}

	@Override
	public Appointment updateAppointment(Integer bookingId, Appointment appointment) {
		if(bookingId==null) throw new AppointmentNotFoundException("Please provide Appointment id you want to update");
		if(appointment==null) throw new AppointmentNotFoundException("Please provide Updated Appointment details");
		appointment.setBookingId(bookingId);
		return appointmentRepository.save(appointment);
	}

	@Override
	public Appointment deleteAppointment(Integer bookingId) {
		if(bookingId==null) throw new AppointmentNotFoundException("Please provide Appointment id you want to delete");
		Optional<Appointment> optional = appointmentRepository.findById(bookingId);
		if(optional.isEmpty()) throw new AppointmentNotFoundException("Appointment Not Found");
		Appointment appointment = optional.get();
		appointmentRepository.delete(appointment);
		return appointment;
	}

}
