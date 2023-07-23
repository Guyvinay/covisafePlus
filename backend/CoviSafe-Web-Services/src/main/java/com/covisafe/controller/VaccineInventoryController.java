package com.covisafe.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.covisafe.modal.Vaccine;
import com.covisafe.modal.VaccineInventory;
import com.covisafe.service.VaccineInventoryService;

@RestController
public class VaccineInventoryController {

	@Autowired
	private VaccineInventoryService vaccineInventoryService;
	
	@GetMapping(value = "/vaccineinventories")
	public ResponseEntity<List<VaccineInventory>>  getAllVaccineInventory(){
		return new ResponseEntity<List<VaccineInventory>>(vaccineInventoryService.getAllVaccineInventory() , HttpStatus.ACCEPTED) ; 
    }
	@GetMapping(value = "/vaccineinventories/bycenter/{center}")
	public ResponseEntity<VaccineInventory>  getVaccinationInventoryByCenter(Integer centerId){ 
		return new ResponseEntity<VaccineInventory>(vaccineInventoryService.getVaccinationInventoryByCenter(centerId) , HttpStatus.ACCEPTED) ; 
    }
	public ResponseEntity<VaccineInventory> addVaccineCount(Integer vaxCenterId ,VaccineInventory inv){ 
		return new ResponseEntity<VaccineInventory>(vaccineInventoryService.addVaccineCount(vaxCenterId , inv) , HttpStatus.ACCEPTED) ; 
	}
	public ResponseEntity<VaccineInventory> updateVaccineInventory(Integer vaccineInvenId,VaccineInventory inv){ 
		return new ResponseEntity<VaccineInventory>(vaccineInventoryService.updateVaccineInventory(vaccineInvenId , inv) , HttpStatus.ACCEPTED) ; 

	}
	public ResponseEntity<Boolean>  deleteVaccinationInventory(Integer vaccineInvenId){ 
		return new ResponseEntity<Boolean>(vaccineInventoryService.deleteVaccinationInventory(vaccineInvenId) , HttpStatus.ACCEPTED) ; 

    }
	public ResponseEntity<List<VaccineInventory>> getVaccineInventoryByDate(LocalDate date){ 
		return new ResponseEntity<List<VaccineInventory>>(vaccineInventoryService.getVaccineInventoryByDate(date) , HttpStatus.ACCEPTED) ; 
	}
	public ResponseEntity<List<VaccineInventory>> getVaccineInventoryByVaccine(Vaccine vaccine){ 
		return new ResponseEntity<List<VaccineInventory>>(vaccineInventoryService.getVaccineInventoryByVaccine(vaccine) , HttpStatus.ACCEPTED) ; 
	}
	
}
