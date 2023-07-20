package com.covisafe.modal;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class AadharCard {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer aadharId;
	private Long aadgharNo;
	
	@OneToOne(mappedBy = "aadharNo" , cascade = CascadeType.ALL)
	private User userId;
	
}
