package com.covisafe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.covisafe.modal.Appointment;
import com.covisafe.service.AppointmentService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;
	
	@GetMapping(value = "/appointments/{bookingId}")
	public ResponseEntity<Appointment> getAppointmentDetails(@PathVariable Integer bookingId){
		return  new ResponseEntity<Appointment>(appointmentService.getAppointmentDetails(bookingId) , HttpStatus.OK);
	}
	
	public ResponseEntity<Appointment> addAppointment(@RequestBody Appointment appointment){
		return  new ResponseEntity<Appointment>(appointmentService.addAppointment(appointment) , HttpStatus.ACCEPTED);
	}
	
	public ResponseEntity<Appointment> updateAppointment(@PathVariable Integer bookingId ,@RequestBody Appointment appointment){
		return  new ResponseEntity<Appointment>(appointmentService.updateAppointment(bookingId , appointment) , HttpStatus.OK);
	}
	
	public ResponseEntity<Appointment> deleteAppointment(Integer bookingId){
		return  new ResponseEntity<Appointment>(appointmentService.deleteAppointment(bookingId) , HttpStatus.OK);
	}
	
}
