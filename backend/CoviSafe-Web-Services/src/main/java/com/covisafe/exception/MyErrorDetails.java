package com.covisafe.exception;

import java.time.LocalDateTime;

import lombok.Data;


@Data
public class MyErrorDetails {
	
	private LocalDateTime timestamp;
	private String message;
	private String details;

}
