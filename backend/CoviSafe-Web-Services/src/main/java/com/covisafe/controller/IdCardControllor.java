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

import com.covisafe.modal.IdCard;
import com.covisafe.service.IdCardService;

import lombok.extern.slf4j.Slf4j;

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
@Deprecated

/**
 * <p>
 * Idcard should be a field instead of having a seperate controllor we will
 * merge it in either memeber or user
 * </p>
 * 
 */

public class IdCardControllor {

	@Autowired
	private IdCardService idCardService;

	@PostMapping(value = "/IdCards")
	public ResponseEntity<IdCard> saveIdCard(@RequestBody IdCard IdCard) {
		return new ResponseEntity<IdCard>(idCardService.addIdCard(IdCard), HttpStatus.ACCEPTED);
	}

	@GetMapping(value = "/IdCards/{id}")
	public ResponseEntity<IdCard> getIdCardById(@PathVariable String id) {
		return new ResponseEntity<IdCard>(idCardService.getIdCardById(id), HttpStatus.ACCEPTED);
	}

	@GetMapping(value = "/IdCards")
	public ResponseEntity<List<IdCard>> getAllIdCards() {
		return new ResponseEntity<List<IdCard>>(idCardService.getAllIdCard(), HttpStatus.ACCEPTED);
	}

	@GetMapping(value = "/IdCards/aadhar/{aadhar}")
	public ResponseEntity<IdCard> getIdCardByAadharNo(@PathVariable String aadhar) {
		return new ResponseEntity<IdCard>(idCardService.getIdCardByAadharNo(aadhar), HttpStatus.ACCEPTED);
	}

	@GetMapping(value = "/IdCards/pan/{pan}")
	public ResponseEntity<IdCard> getIdCardByPanNo(@PathVariable String pan) {
		return new ResponseEntity<IdCard>(idCardService.getIdCardByPanNo(pan), HttpStatus.ACCEPTED);
	}
}
