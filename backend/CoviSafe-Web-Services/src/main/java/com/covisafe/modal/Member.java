package com.covisafe.modal;

import java.time.LocalDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Member {

	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Integer id;
	 
	 private boolean dose1Status;
	 
	 private boolean dose2Status;
	 
	 private LocalDate dose1Date;
	 
	 private LocalDate dose2Date;
	 
	 @OneToOne(cascade = CascadeType.ALL)
	 private User user;
	 
	 @OneToOne(mappedBy = "memberId", cascade = CascadeType.ALL)
	 private Appointment appointment;
	 
	 @OneToOne(mappedBy = "member", cascade = CascadeType.ALL)
	 private Vaccine vaccine;

	 @Embedded
	 private VaccineRegistration vaxRegistration;
	 
	 
}
