package com.covisafe.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {  // Exception Handler
	
	 @ExceptionHandler(InvalidVaccineDataException.class)
	    public ResponseEntity<MyErrorDetails> handleInvalidVaccineDataException(InvalidVaccineDataException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("Invalid vaccine data: " + ex.getMessage());
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }
	 

	    @ExceptionHandler(VaccineNotFoundException.class)
	    public ResponseEntity<MyErrorDetails> handleVaccineNotFoundException(VaccineNotFoundException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("Vaccine not found: " + ex.getMessage());
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(InvalidAppointmentException.class)
	    public ResponseEntity<MyErrorDetails> handleInvalidAppointmentException(InvalidAppointmentException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("Invalid appointment: " + ex.getMessage());
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(AppointmentNotFoundException.class)
	    public ResponseEntity<MyErrorDetails> handleAppointmentNotFoundException(AppointmentNotFoundException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("Appointment not found: " + ex.getMessage());
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(InvalidUserException.class)
	    public ResponseEntity<MyErrorDetails> handleInvalidUserException(InvalidUserException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("Invalid user: " + ex.getMessage());
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(IdCardNotFoundException.class)
	    public ResponseEntity<MyErrorDetails> handleIdCardNotFoundException(IdCardNotFoundException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("User not found: " + ex.getMessage());
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(VaccineUnavailableException.class)
	    public ResponseEntity<MyErrorDetails> handleVaccineUnavailableException(VaccineUnavailableException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("Vaccine is currently unavailable: " + ex.getMessage());
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(DuplicateAppointmentException.class)
	    public ResponseEntity<MyErrorDetails> handleDuplicateAppointmentException(DuplicateAppointmentException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("Duplicate appointment found: " + ex.getMessage());
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(InvalidLocationException.class)
	    public ResponseEntity<MyErrorDetails> handleInvalidLocationException(InvalidLocationException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("Invalid location: " + ex.getMessage());
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(InsufficientDosesException.class)
	    public ResponseEntity<MyErrorDetails> handleInsufficientDosesException(InsufficientDosesException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("Insufficient vaccine doses: " + ex.getMessage());
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(BookingTimeExpiredException.class)
	    public ResponseEntity<MyErrorDetails> handleBookingTimeExpiredException(BookingTimeExpiredException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("Booking time has expired: " + ex.getMessage());
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(UnauthorizedAccessException.class)
	    public ResponseEntity<MyErrorDetails> handleUnauthorizedAccessException(UnauthorizedAccessException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("Unauthorized access: " + ex.getMessage());
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }
	    
	    @ExceptionHandler(NoHandlerFoundException.class)
	    public ResponseEntity<MyErrorDetails> noHandlerExceptionHandler(NoHandlerFoundException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("There is no handler for this endpoint: " + req.getDescription(false));
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(MethodArgumentNotValidException.class)
	    public ResponseEntity<MyErrorDetails> notValidExceptionHandler(MethodArgumentNotValidException ex, WebRequest req) {
	        MyErrorDetails err = new MyErrorDetails();
	        err.setTimestamp(LocalDateTime.now());
	        err.setMessage("Validation failed: " + ex.getMessage());
	        err.setDetails(req.getDescription(false));
	        return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(Exception.class)
	    public ResponseEntity<MyErrorDetails> GeneralExceptionHandler(Exception se, WebRequest req){
	    	MyErrorDetails err= new MyErrorDetails();
	    	err.setTimestamp(LocalDateTime.now());
	    	err.setMessage(se.getMessage());
	    	err.setDetails(req.getDescription(false));
	    	return new ResponseEntity<MyErrorDetails>(err, HttpStatus.BAD_REQUEST) ;
	    }
	

}
