package com.covisafe.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.covisafe.modal.Appointment;
import com.covisafe.service.AppointmentService;


/*
 
 {
 "mobileNo":3456780987,
 "dateOfBooking":"2020-07-06",
 "slot":"Slot1",
 "bookingStatus":false,
 }
 
 
 */

@RestController
@CrossOrigin("*")
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;
	
	@GetMapping(value = "/appointments/{bookingId}")
	public ResponseEntity<Appointment> getAppointmentDetails(@PathVariable String bookingId){
		return  new ResponseEntity<Appointment>(appointmentService.getAppointmentDetails(bookingId) , HttpStatus.OK);
	}
	@PostMapping(value = "/appointments/{memberid}/{vaxcenterid}")
	public ResponseEntity<Appointment> addAppointment(@PathVariable String memberid , @PathVariable String vaxcenterid,@RequestBody Appointment appointment){
		appointment.setDateOfBooking(LocalDate.now());
		return  new ResponseEntity<Appointment>(appointmentService.addAppointment(memberid , vaxcenterid , appointment) , HttpStatus.ACCEPTED);
	}
	@PutMapping(value = "/appointments/{bookingId}")
	public ResponseEntity<Appointment> updateAppointment(@PathVariable String bookingId ,@RequestBody Appointment appointment){
		return  new ResponseEntity<Appointment>(appointmentService.updateAppointment(bookingId , appointment) , HttpStatus.OK);
	}
	@DeleteMapping(value = "/appointments/{bookingId}")
	public ResponseEntity<Appointment> deleteAppointment(@PathVariable String bookingId){
		return  new ResponseEntity<Appointment>(appointmentService.deleteAppointment(bookingId) , HttpStatus.OK);
	}

	@GetMapping(value = "/appointments")
	public ResponseEntity<List<Appointment>> getAllAppointments(){
		return new ResponseEntity<List<Appointment>>(appointmentService.getAllAppointments(), HttpStatus.OK);
	}
	
}
