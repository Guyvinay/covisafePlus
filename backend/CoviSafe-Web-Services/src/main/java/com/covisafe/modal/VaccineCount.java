package com.covisafe.modal;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class VaccineCount {

	    @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private Integer vaxId;
	    private Integer vaxQuantity;
	    private double vaxPrice;
	    
	    @OneToOne(cascade = CascadeType.ALL)
	    private Vaccine vaccine;
	    
	    @ManyToOne(cascade = CascadeType.ALL)
	    private VaccineInventory vaxInventory;
	    
}
