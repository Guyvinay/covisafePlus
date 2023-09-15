package com.covisafe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.covisafe.modal.User;
import com.covisafe.service.UserService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@Controller
public class UserControllor {

	@Autowired
	private UserService userService;

	@PostMapping("/users/register")
	ResponseEntity<AuthenticationResponse> registerUser(@RequestBody User user) {
		return new ResponseEntity<AuthenticationResponse>(userService.register(user), HttpStatus.CREATED);
	}

	@PostMapping("/users/signin")
	ResponseEntity<AuthenticationResponse> signInUser(@RequestBody AuthenticationRequest authRequest) {
		return new ResponseEntity<AuthenticationResponse>(userService.signInUser(authRequest), HttpStatus.OK);
	}
}
