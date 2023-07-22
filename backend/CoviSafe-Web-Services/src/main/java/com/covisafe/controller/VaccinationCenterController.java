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
import org.springframework.web.bind.annotation.RestController;

import com.covisafe.modal.VaccinationCenter;
import com.covisafe.service.VaccinationCenterService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
public class VaccinationCenterController {

	/*
	public List<VaccinationCenter> getAllVaccinationCenter();
	public VaccinationCenter getVaccination(Integer centerId);
	public VaccinationCenter addVaccinationCenter(VaccinationCenter center);
	public VaccinationCenter updateVaccineCenter(Integer centerId , VaccinationCenter center);
	public Boolean deleteVaccinationCenter(Integer centerId);
	 */
	
	@Autowired
	private VaccinationCenterService vaccinationCenterService;
	@GetMapping(value = "/vaccinationCenters")
	public ResponseEntity<List<VaccinationCenter>> getAllVaccinationCenter(){
		return new ResponseEntity<List<VaccinationCenter>>(vaccinationCenterService.getAllVaccinationCenter(), HttpStatus.ACCEPTED);
	}
	@GetMapping(value = "/vaccinationCenters/{centerId}")
	public ResponseEntity<VaccinationCenter> getVaccinationCenterById(@PathVariable Integer centerId){
		return new ResponseEntity<VaccinationCenter>(vaccinationCenterService.getVaccination(centerId) , HttpStatus.ACCEPTED);
	}
	@PostMapping(value = "/vaccinationCenters")
	public ResponseEntity<VaccinationCenter> addVaccinationCenter(@RequestBody VaccinationCenter center){
		return new ResponseEntity<VaccinationCenter>(vaccinationCenterService.addVaccinationCenter(center) , HttpStatus.ACCEPTED);
	}
	@PutMapping(value = "/vaccinationCenters/{centerId}")
	public ResponseEntity<VaccinationCenter> updateVaccineCenter(Integer centerId , VaccinationCenter center){
		return new ResponseEntity<VaccinationCenter>(vaccinationCenterService.updateVaccineCenter(centerId , center) , HttpStatus.ACCEPTED);
	}
	@DeleteMapping(value = "vaccinationCenters/{centerId}")
	public ResponseEntity<Boolean> deleteVaccinationCenter(Integer centerId) {
		return new ResponseEntity<Boolean>(vaccinationCenterService.deleteVaccinationCenter(centerId) , HttpStatus.ACCEPTED);
	}
	
	
}
