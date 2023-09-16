package com.covisafe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.covisafe.modal.IdCard;
import com.covisafe.service.UserService;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class UserControllor {

	@Autowired
	private UserService userService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostMapping("/users/register")
	ResponseEntity<AuthenticationResponse> registerUser(@Valid @RequestBody IdCard user) {
		log.info(user.toString());
		user.setPassword(
				passwordEncoder
				.encode(
						user
						.getPassword()
				)
		);
		return new ResponseEntity<AuthenticationResponse>(userService.register(user), HttpStatus.CREATED);
	}

	@PostMapping("/users/signin")
	ResponseEntity<AuthenticationResponse> signInUser(@RequestBody AuthenticationRequest authRequest) {
		return new ResponseEntity<AuthenticationResponse>(userService.signInUser(authRequest), HttpStatus.OK);
	}
}
