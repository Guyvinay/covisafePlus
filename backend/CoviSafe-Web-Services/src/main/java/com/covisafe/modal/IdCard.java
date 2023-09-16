package com.covisafe.modal;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class IdCard extends User {

	@Size(min = 2, max = 20)
	private String name;

	@Past(message = "Invalid date of birth")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;

	@NotNull(message = "Gender must be specified")
	private String gender;

	@Size(min = 2, max = 80, message = "minimum 2 an maximum 80 characters are allowed")
	private String address;

	@Size(min = 2, max = 40)
	private String city;

	@Size(min = 2, max = 40)
	private String state;

	@Pattern(regexp = "^[1-9][0-9]{5}$", message = "Invalid  PIN code")
	private String pincode;

	private String panNo;

	private String aadharNo;

	@JsonIgnore
	@OneToOne
	private Member member;

	public IdCard(
			@NotBlank(message = "email can't be blank") @Email(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "email should be in proper format i.e : johndoe@example.com") String email,
			@NotBlank(message = "password can't be blank") String password, Role role,
			@Size(min = 2, max = 20) String name, @Past(message = "Invalid date of birth") LocalDate dob,
			@NotNull(message = "Gender must be specified") String gender,
			@Size(min = 2, max = 80, message = "minimum 2 an maximum 80 characters are allowed") String address,
			@Size(min = 2, max = 40) String city, @Size(min = 2, max = 40) String state,
			@Pattern(regexp = "^[1-9][0-9]{5}$", message = "Invalid  PIN code") String pincode, String panNo,
			String aadharNo, Member member) {
		super(email, password, role);
		this.name = name;
		this.dob = dob;
		this.gender = gender;
		this.address = address;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.panNo = panNo;
		this.aadharNo = aadharNo;
		this.member = member;
	}

}
