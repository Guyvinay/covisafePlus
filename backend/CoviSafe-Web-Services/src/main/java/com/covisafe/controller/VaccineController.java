package com.covisafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.covisafe.modal.Vaccine;
import com.covisafe.service.VaccineService;

@RestController
public class VaccineController {

	@Autowired
	private VaccineService vaccineService;
	
	@GetMapping(value = "/vaccines")
	public ResponseEntity<List<Vaccine>> getAllVaccine(){
		return new ResponseEntity<List<Vaccine>>(vaccineService.getAllVaccine() , HttpStatus.ACCEPTED); 
    }
	@GetMapping(value = "/vaccines/byName/{vaccineName}")
	public ResponseEntity<Vaccine> getVaccineByName(@PathVariable String vaccineName){
		return new ResponseEntity<Vaccine>(vaccineService.getVaccineByName(vaccineName) ,HttpStatus.ACCEPTED);
    }
	@GetMapping(value = "/vaccines/{vaccineId}")
	public ResponseEntity<Vaccine> getVaccineById(@PathVariable Integer vaccineId){
		return new ResponseEntity<Vaccine>(vaccineService.getVaccineById(vaccineId) ,HttpStatus.ACCEPTED);
    }
	@PostMapping(value = "/vaccines/{memberId}")
	public ResponseEntity<Vaccine> addVaccine(@RequestBody Vaccine vaccine, @PathVariable Integer memberId){
		return new ResponseEntity<Vaccine>(vaccineService.addVaccine(vaccine , memberId) ,HttpStatus.ACCEPTED);    
    }
	@PutMapping(value = "/vaccines/{vaccineId}")
	public ResponseEntity<Vaccine> updateVaccine(@PathVariable Integer vaccineId,@RequestBody Vaccine vaccine){
		return new ResponseEntity<Vaccine>(vaccineService.updateVaccine(vaccineId , vaccine) ,HttpStatus.ACCEPTED);    
    }
	@DeleteMapping(value = "/vaccines/vaccineId")
	public ResponseEntity<Boolean> deleteVaccine(@PathVariable Integer vaccineId){
		return new ResponseEntity<Boolean>(vaccineService.deleteVaccine(vaccineId ) ,HttpStatus.ACCEPTED);    
    }
	
}
