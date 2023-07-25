package com.covisafe.exception;

public class InvalidVaccineDataException extends RuntimeException {

    public InvalidVaccineDataException(String message) {
        super(message);
    }
}