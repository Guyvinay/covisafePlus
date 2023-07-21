package com.covisafe.service.SerImpl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.covisafe.modal.Vaccine;
import com.covisafe.modal.VaccineInventory;
import com.covisafe.service.VaccineInventoryService;
@Service
public class VaccineInventoryServiceImp implements VaccineInventoryService {

	@Override
	public List<VaccineInventory> getAllVaccineInventory() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VaccineInventory getVaccinationInventoryByCenter(Integer centerId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VaccineInventory addVaccineCount(VaccineInventory inv) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VaccineInventory updateVaccineInventory(VaccineInventory inv) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean deleteVaccinationInventory(VaccineInventory inv) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<VaccineInventory> getVaccineInventoryByDate(LocalDate date) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<VaccineInventory> getVaccineInventoryByVaccine(Vaccine vaccine) {
		// TODO Auto-generated method stub
		return null;
	}

}
