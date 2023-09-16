package com.covisafe.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class IdCardNotFoundException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public IdCardNotFoundException(String message) {
		super(message);
	}

}
