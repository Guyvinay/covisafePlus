package com.covisafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.covisafe.modal.Vaccine;
import com.covisafe.service.VaccineService;

@RestController
public class VaccineController {
	
	@Autowired
	private VaccineService vaccineService;
	
	@GetMapping("/vaccines")
	public ResponseEntity<List<Vaccine>> getAllVaccine()
	{
		return new ResponseEntity<List<Vaccine>>(vaccineService.getAllVaccine(),HttpStatus.OK);
	}
	
	@GetMapping("/vaccines/{vaxName}")
	public ResponseEntity<Vaccine> getVaccineByName(@PathVariable String vaxName)
	{
		return new ResponseEntity<Vaccine>(vaccineService.getVaccineByName(vaxName),HttpStatus.OK);
	}
	
	@GetMapping("/vaccine_s/{vaxId}")
	public ResponseEntity<Vaccine> getVaccineById(@PathVariable Integer vaxId)
	{
		return new ResponseEntity<Vaccine>(vaccineService.getVaccineById(vaxId),HttpStatus.OK);
	}
	
	@PostMapping("/vaccines/{memberId}")
	public ResponseEntity<Vaccine> addVaccine(@PathVariable Integer memberId, @RequestBody Vaccine vaccine)
	{
		return new ResponseEntity<Vaccine>(vaccineService.addVaccine(vaccine, memberId),HttpStatus.OK);
	}
	
	@PatchMapping("/vaccines/{vaxId}")
	public ResponseEntity<Vaccine> updateVaccine(@PathVariable Integer vaxId, @RequestBody Vaccine vaccine)
	{
		return new ResponseEntity<Vaccine>(vaccineService.updateVaccine(vaxId, vaccine),HttpStatus.OK);
	}
	
	@DeleteMapping("/vaccines/{vaxId}")
	public Boolean deleteVaccine(@PathVariable Integer vaxId)
	{
		return true;
	}
	
}
