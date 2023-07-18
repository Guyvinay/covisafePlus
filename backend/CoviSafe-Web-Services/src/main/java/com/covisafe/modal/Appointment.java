package com.covisafe.modal;

import java.time.LocalDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Appointment {

	 @Id
	 @GeneratedValue(strategy =  GenerationType.IDENTITY)
	 private Integer bookingId;
	 private Long mobileNo;
	 private LocalDate dateOfBooking;
	 @Enumerated(EnumType.STRING)
	 private Slot slot;
	 private boolean bookingStatus;
	 
	 @OneToOne(cascade = CascadeType.ALL)
	 private Member memberId;
	 
	 @ManyToOne(cascade = CascadeType.ALL)
	 private VaccinationCenter vaxCenter;
	 
	 
}
