package com.covisafe.modal;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
public class VaccinationCenter {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer centerId;
	@Size(min = 2, max = 80)
    private String centerName;
	@Size(min = 2, max = 80)
    private String address;
	@Size(min = 2, max = 80)
    private String city;
	@Size(min = 2, max = 80)
    private String state;
    @Pattern(regexp = "^[1-9][0-9]{5}$", message = "Invalid Indian PIN code")
    private String pinCode;
    
    @OneToMany(mappedBy = "vaxCenter" , cascade = CascadeType.ALL)
    private List<Appointment> appointments;
	
    @OneToOne(cascade = CascadeType.ALL)
    private VaccineInventory vaxInventory;
}
