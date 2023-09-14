package com.covisafe.exception;

public class AppointmentNotFoundException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public AppointmentNotFoundException(String message) {
		super(message);
	}

}
 