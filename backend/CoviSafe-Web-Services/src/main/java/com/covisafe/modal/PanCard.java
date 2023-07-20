package com.covisafe.modal;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class PanCard {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer Id;
	    
	    private String number;
	    
	    @OneToOne(mappedBy = "panNo",cascade = CascadeType.ALL)
	    private User userId;
	
}
