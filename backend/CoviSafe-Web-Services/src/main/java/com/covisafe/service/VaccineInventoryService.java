package com.covisafe.service;

import java.time.LocalDate;
import java.util.List;

import com.covisafe.modal.Vaccine;
import com.covisafe.modal.VaccineInventory;

public interface VaccineInventoryService {
	
	public List<VaccineInventory> getAllVaccineInventory();
	public VaccineInventory getVaccinationInventoryByCenter(Integer centerId);
	public VaccineInventory addVaccineCount(Integer vaxCenterId ,VaccineInventory inv);
	public VaccineInventory updateVaccineInventory(Integer vaccineInvenId,VaccineInventory inv);
	public Boolean deleteVaccinationInventory(Integer vaccineInvenId);
	public List<VaccineInventory> getVaccineInventoryByDate(LocalDate date);
	public List<VaccineInventory> getVaccineInventoryByVaccine(Vaccine vaccine);
}
