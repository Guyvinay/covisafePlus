package com.covisafe.service.SerImpl;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covisafe.exception.VaccineNotFoundException;
import com.covisafe.modal.VaccinationCenter;
import com.covisafe.modal.Vaccine;
import com.covisafe.modal.VaccineInventory;
import com.covisafe.repository.VaccinationCenterRepository;
import com.covisafe.repository.VaccineInventoryRepository;
import com.covisafe.service.VaccineInventoryService;

@Service
public class VaccineInventoryServiceImp implements VaccineInventoryService {

	@Autowired
	private VaccineInventoryRepository vaccineInventoryRepository;

	@Autowired
	private VaccinationCenterRepository vaccinationCenterRepository;

	@Override
	public List<VaccineInventory> getAllVaccineInventory() {
		List<VaccineInventory> list = vaccineInventoryRepository.findAll();
		if (list.size() == 0)
			throw new VaccineNotFoundException("Not Any Vaccine Inventory Found");
		return list;
	}

	@Override
	public VaccineInventory getVaccinationInventoryByCenter(String centerId) {

		return null;
	}

	@Override
	public VaccineInventory addVaccineCount(String vaxCenterId, VaccineInventory inv) {

		Optional<VaccinationCenter> optional = vaccinationCenterRepository.findById(vaxCenterId);
		if (optional.isEmpty())
			throw new VaccineNotFoundException("Vax Center Not Found");
		inv.setVaxCenter(optional.get());
		return vaccineInventoryRepository.save(inv);
	}

	@Override
	public VaccineInventory updateVaccineInventory(String vaccineInvenId, VaccineInventory inv) {

		if (vaccineInvenId == null)
			throw new VaccineNotFoundException("Please provide Vaccination inventory id to update");

		if (inv == null)
			throw new VaccineNotFoundException("Please provide Vaccination inventory details to update");

		inv.setInventoryId(vaccineInvenId);

		return vaccineInventoryRepository.save(inv);
	}

	@Override
	public Boolean deleteVaccinationInventory(String vaccineInvenId) {
		if (vaccineInvenId == null)
			throw new VaccineNotFoundException("Please provide Vaccination inventory id to delete");
		vaccineInventoryRepository.deleteById(vaccineInvenId);
		return true;
	}

	@Override
	public List<VaccineInventory> getVaccineInventoryByDate(LocalDate date) {
		List<VaccineInventory> list = vaccineInventoryRepository.findVaccineInventoryByDate(date);
		if (list.size() == 0)
			throw new VaccineNotFoundException("Vaccine inventory not found on given date");
		return list;
	}

	@Override
	public List<VaccineInventory> getVaccineInventoryByVaccine(String vaccineId) {

		return null;
	}

}
