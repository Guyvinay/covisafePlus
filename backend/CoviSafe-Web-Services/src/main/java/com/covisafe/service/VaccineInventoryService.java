package com.covisafe.service;

import java.time.LocalDate;
import java.util.List;

import com.covisafe.modal.VaccineInventory;

public interface VaccineInventoryService {
	
	public List<VaccineInventory> getAllVaccineInventory();
	public VaccineInventory getVaccinationInventoryByCenter(String centerId);
	public VaccineInventory addVaccineCount(String vaxCenterId ,VaccineInventory inv);
	public VaccineInventory updateVaccineInventory(String vaccineInvenId,VaccineInventory inv);
	public Boolean deleteVaccinationInventory(String vaccineInvenId);
	public List<VaccineInventory> getVaccineInventoryByDate(LocalDate date);
	public List<VaccineInventory> getVaccineInventoryByVaccine(String vaccineId);
}
