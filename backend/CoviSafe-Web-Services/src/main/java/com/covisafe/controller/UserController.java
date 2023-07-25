package com.covisafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.covisafe.modal.User;
import com.covisafe.service.UserService;


/*
  {
	  "name":"Ethan",
	  "dob":"1981-03-20",
	  "gender":"MALE",
	  "address":"LA",
	  "city":"PATNA",
	  "state":"BIHAR",
	  "pincode":"800006",
	  "password":"1234",
	  "role":"ROLE_ADMIN",
	  "aadharNo":"988764345",
	  "panNo":"ETH7647"
	} 
	  
 */

@RestController
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping(value = "/users")
	public ResponseEntity<User> saveUser(@RequestBody User user){
		return new ResponseEntity<User>(userService.addUser(user) , HttpStatus.ACCEPTED);
	}
	@GetMapping(value = "/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Integer id){
		return new ResponseEntity<User>(userService.getUserById(id) , HttpStatus.ACCEPTED);
	}
	@GetMapping(value = "/users")
	public ResponseEntity<List<User>> getAllUsers(){
		return new ResponseEntity<List<User>>(userService.getAllUser(), HttpStatus.ACCEPTED);
	}
	@GetMapping(value = "/users/aadhar/{aadhar}")
	public ResponseEntity<User> getUserByAadharNo(@PathVariable String aadhar){
		return new ResponseEntity<User>(userService.getUserByAadharNo(aadhar), HttpStatus.ACCEPTED);
	}
	@GetMapping(value = "/users/pan/{pan}")
	public ResponseEntity<User> getUserByPanNo(@PathVariable String pan){
		return new ResponseEntity<User>(userService.getUserByPanNo(pan), HttpStatus.ACCEPTED);
	}
}
