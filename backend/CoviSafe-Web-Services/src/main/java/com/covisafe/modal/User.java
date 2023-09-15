package com.covisafe.modal;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Inheritance(strategy = InheritanceType.JOINED)
public class User implements UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer userId;
	
	@NotBlank(message = "email can't be blank")
	@Email( regexp = "\\\\b[\\\\w.%-]+@[-.\\\\w]+\\\\.[A-Za-z]{2,4}\\\\b", 
		    message = "email should be in proper format i.e : johndoe@example.com"
	)
	private String email;
	
	@NotBlank(message = "password can't be blank")
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	
	
	private LocalDateTime createdAt = LocalDateTime.now();
	
	@Enumerated(EnumType.STRING)
	private Role role;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of(new SimpleGrantedAuthority(role.name()));
	}

	public User(
			
			@NotBlank(message = "email can't be blank")
			@Email(
					regexp = "\\\\b[\\\\w.%-]+@[-.\\\\w]+\\\\.[A-Za-z]{2,4}\\\\b",
					message = "email should be in proper format i.e : johndoe@example.com"
			)
			String email,
			
			@NotBlank(message = "password can't be blank")
			String password,
			
			Role role
			
	) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
	}
	
	
	@Override
	public String getUsername() {
		return this.email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
