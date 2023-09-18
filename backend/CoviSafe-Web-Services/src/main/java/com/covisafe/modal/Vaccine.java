package com.covisafe.modal;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Vaccine {

	@Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String Id;
    private String vaxName;
    private String description;
    
    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    private Member member;
    
    @OneToOne(mappedBy = "vaccine" , cascade = CascadeType.ALL)
    private VaccineCount vaccineCount;
	
}
