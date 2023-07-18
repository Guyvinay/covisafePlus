package com.covisafe.modal;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class User {

	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Integer id;
	  private String name;
	  private LocalDate dob;
	  private String gender;
	  private String address;
	  private String city;
	  private String state;
	  private String pincode;
	  @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	  private String password;
	  private String role;
	 
	  @OneToOne( cascade = CascadeType.ALL)
	  private PanCard panNo;
	  
	  @OneToOne( cascade = CascadeType.ALL)
	  private AadharCard aadharNo;
	  
	  @OneToOne( mappedBy = "user")
	  private Member member;
	
}
