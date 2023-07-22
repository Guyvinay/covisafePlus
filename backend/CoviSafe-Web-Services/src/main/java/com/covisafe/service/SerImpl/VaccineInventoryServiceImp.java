package com.covisafe.service.SerImpl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covisafe.exception.VaccineNotFoundException;
import com.covisafe.modal.Vaccine;
import com.covisafe.modal.VaccineInventory;
import com.covisafe.repository.VaccineInventoryRepository;
import com.covisafe.service.VaccineInventoryService;
@Service
public class VaccineInventoryServiceImp implements VaccineInventoryService {


	@Autowired
	private VaccineInventoryRepository vaccineInventoryRepository;
	
	@Override
	public List<VaccineInventory> getAllVaccineInventory() {
		List<VaccineInventory> list = vaccineInventoryRepository.findAll();
		if(list.size()==0) throw new VaccineNotFoundException("No ANy Vaccine Inventory Found");
		return list;

	}

	@Override
	public VaccineInventory getVaccinationInventoryByCenter(Integer centerId) {
		
		return null;
	}

	@Override
	public VaccineInventory addVaccineCount(VaccineInventory inv) {
		return vaccineInventoryRepository.save(inv);
	}

	@Override
	public VaccineInventory updateVaccineInventory(VaccineInventory inv) {
		  
		return null;
	}

	@Override
	public Boolean deleteVaccinationInventory(VaccineInventory inv) {
		  
		return null;
	}

	@Override
	public List<VaccineInventory> getVaccineInventoryByDate(LocalDate date) {
		  
		return null;
	}

	@Override
	public List<VaccineInventory> getVaccineInventoryByVaccine(Vaccine vaccine) {
		  
		return null;
	}

}
