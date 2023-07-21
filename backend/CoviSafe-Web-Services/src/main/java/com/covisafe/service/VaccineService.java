package com.covisafe.service;

import java.util.List;

import com.covisafe.modal.Vaccine;

public interface VaccineService {
	public List<Vaccine> getAllVaccine();
	public Vaccine getVaccineByName(String vaccineName);
	public Vaccine getVaccineById(Integer vaccineId);
	public Vaccine addVaccine(Vaccine vaccine);
	public Vaccine updateVaccine(Vaccine vaccine);
	public Boolean deleteVaccine(Vaccine vaccine);
}
