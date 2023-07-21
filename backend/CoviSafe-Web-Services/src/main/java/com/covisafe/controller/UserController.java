package com.covisafe.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.covisafe.modal.User;
import com.covisafe.service.UserService;
import com.fasterxml.jackson.annotation.JsonProperty;

/*
 * 
	  {
	  "name":"Shelbi",
	  "dob":"2000-03-29",
	  "gender":"MALE",
	  "address":"Downtown",
	  "city":"PATNA",
	  "state":"BIHAR",
	  "pincode":"800006",
	  "password":"1234",
	  "role":"ROLE_ADMIN",
	  "aadharNo":"987654098",
	  "panNo":"vl5768"
	  } 
	  
 */

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping(value = "/users")
	public ResponseEntity<User> saveUser(@RequestBody User user){
		return new ResponseEntity<User>(userService.addUser(user) , HttpStatus.ACCEPTED);
	}
	@GetMapping(value = "/users/{id}")
	public ResponseEntity<User> saveUser(@PathVariable Integer id){
		return new ResponseEntity<User>(userService.getUserById(id) , HttpStatus.ACCEPTED);
	}
	@GetMapping(value = "/users")
	public ResponseEntity<List<User>> getAllUsers(){
		return new ResponseEntity<List<User>>(userService.getAllUser(), HttpStatus.ACCEPTED);
	}
}
