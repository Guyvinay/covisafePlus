package com.covisafe.service;

import java.time.LocalDate;
import java.util.List;

import com.covisafe.modal.Vaccine;
import com.covisafe.modal.VaccineInventory;

public interface VaccineInventoryService {
	
	public List<VaccineInventory> getAllVaccineInventory();
	public VaccineInventory getVaccinationInventoryByCenter(Integer centerId);
	public VaccineInventory addVaccineCount(VaccineInventory inv);
	public VaccineInventory updateVaccineInventory(VaccineInventory inv);
	public Boolean deleteVaccinationInventory(VaccineInventory inv);
	public List<VaccineInventory> getVaccineInventoryByDate(LocalDate date);
	public List<VaccineInventory> getVaccineInventoryByVaccine(Vaccine vaccine);
}
