package com.covisafe.service;

import java.util.List;

import com.covisafe.modal.Vaccine;

public interface VaccineService {
	public List<Vaccine> getAllVaccine();
	public Vaccine getVaccineByName(String vaccineName);
	public Vaccine getVaccineById(String vaccineId);
	public Vaccine addVaccine(Vaccine vaccine,String memberId);
	public Vaccine updateVaccine(String vaccineId,Vaccine vaccine);
	public Boolean deleteVaccine(String vaccine);
}
