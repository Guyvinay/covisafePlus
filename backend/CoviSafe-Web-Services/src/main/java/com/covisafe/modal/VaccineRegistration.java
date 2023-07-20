package com.covisafe.modal;

import java.time.LocalDate;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Embeddable
@Data
public class VaccineRegistration {
	private Long mobNo;
    private LocalDate dateOfRegistration = LocalDate.now();
	
}
