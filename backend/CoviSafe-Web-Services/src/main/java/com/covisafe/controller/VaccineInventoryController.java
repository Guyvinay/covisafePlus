package com.covisafe.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.covisafe.modal.VaccineInventory;
import com.covisafe.service.VaccineInventoryService;

@RestController
@CrossOrigin("*")
public class VaccineInventoryController {

	@Autowired
	private VaccineInventoryService vaccineInventoryService;
	
	@GetMapping(value = "/vaccineinventories")
	public ResponseEntity<List<VaccineInventory>>  getAllVaccineInventory(){
		return new ResponseEntity<List<VaccineInventory>>(vaccineInventoryService.getAllVaccineInventory() , HttpStatus.ACCEPTED) ; 
    }
	@GetMapping(value = "/vaccineinventories/bycenter/{center}")
	public ResponseEntity<VaccineInventory>  getVaccinationInventoryByCenter(@PathVariable String centerId){ 
		return new ResponseEntity<VaccineInventory>(vaccineInventoryService.getVaccinationInventoryByCenter(centerId) , HttpStatus.ACCEPTED) ; 
    }
	@PostMapping(value = "/vaccineinventories/{vaxCenterId}")
	public ResponseEntity<VaccineInventory> addVaccineCount(@PathVariable String vaxCenterId ,@RequestBody VaccineInventory inv){ 
		return new ResponseEntity<VaccineInventory>(vaccineInventoryService.addVaccineCount(vaxCenterId , inv) , HttpStatus.ACCEPTED) ; 
	}
	@PutMapping(value = "/vaccineinventories/{vaccineInvenId}")
	public ResponseEntity<VaccineInventory> updateVaccineInventory(@PathVariable String vaccineInvenId,@RequestBody VaccineInventory inv){ 
		return new ResponseEntity<VaccineInventory>(vaccineInventoryService.updateVaccineInventory(vaccineInvenId , inv) , HttpStatus.ACCEPTED) ; 

	}
	@DeleteMapping(value = "/vaccineinventories/{vaccineInvenId}")
	public ResponseEntity<Boolean>  deleteVaccinationInventory(@PathVariable String vaccineInvenId){ 
		return new ResponseEntity<Boolean>(vaccineInventoryService.deleteVaccinationInventory(vaccineInvenId) , HttpStatus.ACCEPTED) ; 

    }
	@GetMapping(value = "/vaccineinventories/{date}")
	public ResponseEntity<List<VaccineInventory>> getVaccineInventoryByDate(@PathVariable LocalDate date){ 
		return new ResponseEntity<List<VaccineInventory>>(vaccineInventoryService.getVaccineInventoryByDate(date) , HttpStatus.ACCEPTED) ; 
	}
	@GetMapping(value = "/vaccineinventories/{vaccineId}")
	public ResponseEntity<List<VaccineInventory>> getVaccineInventoryByVaccine(@PathVariable String vaccineId){ 
		return new ResponseEntity<List<VaccineInventory>>(vaccineInventoryService.getVaccineInventoryByVaccine(vaccineId) , HttpStatus.ACCEPTED) ; 
	}
	
}
