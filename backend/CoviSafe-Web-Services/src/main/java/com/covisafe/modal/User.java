package com.covisafe.modal;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Size(min = 2, max = 20)
	private String name;
	@Past(message = "Invalid date of birth")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;
	@NotNull(message = "Gender must be specified")
	private String gender;
	@Size(min = 2, max = 80)
	private String address;
	@Size(min = 2, max = 40)
	private String city;
	@Size(min = 2, max = 40)
	private String state;
	@Pattern(regexp = "^[1-9][0-9]{5}$", message = "Invalid Indian PINcode")
	private String pincode;
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String password;
	private String role;

	@OneToOne
	private PanCard panNo;
	@OneToOne(cascade = CascadeType.ALL)
	private AadharCard aadharCard;
	private Member member;

}
