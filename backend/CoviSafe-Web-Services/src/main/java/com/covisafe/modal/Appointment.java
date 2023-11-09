package com.covisafe.modal;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Pattern;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Setter
@Getter
public class Appointment {

	 @Id
	 @GeneratedValue(strategy =  GenerationType.UUID)
	 private String bookingId;
	 private Long mobileNo;
	 private LocalDate dateOfBooking;
	 @Enumerated(EnumType.STRING)
	 private Slot slot;
	 private boolean bookingStatus;
	 
	 @JsonIgnore
	 @OneToOne()
	 private Member memberId;
	 
	 @JsonIgnore
	 @ManyToOne()
	 private VaccinationCenter vaxCenter;

	 public boolean getBookingStatus(){
		 return this.bookingStatus;
	 }
	 
}
