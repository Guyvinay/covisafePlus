package com.covisafe.modal;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class AadharCard {

	@Id
    @GeneratedValue(strategy = GenerationType.UUID)
	private String aadharId;
	private Long aadgharNo;
	
	@OneToOne(cascade = CascadeType.ALL)
	private IdCard idCard;
	
}
