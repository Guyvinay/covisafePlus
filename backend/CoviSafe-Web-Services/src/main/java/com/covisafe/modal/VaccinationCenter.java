package com.covisafe.modal;

import java.util.List;

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
public class VaccinationCenter {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer centerId;
    private String centerName;
    private String address;
    private String city;
    private String state;
    private String pinCode;
    
    @OneToMany(mappedBy = "vaxCenter" , cascade = CascadeType.ALL)
    private List<Appointment> appointments;
	
    @OneToOne(cascade = CascadeType.ALL)
    private VaccineInventory vaxInventory;
}
