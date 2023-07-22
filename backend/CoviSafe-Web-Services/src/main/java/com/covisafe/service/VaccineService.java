package com.covisafe.service;

import java.util.List;

import com.covisafe.modal.Vaccine;

public interface VaccineService {
	public List<Vaccine> getAllVaccine();
	public Vaccine getVaccineByName(String vaccineName);
	public Vaccine getVaccineById(Integer vaccineId);
	public Vaccine addVaccine(Vaccine vaccine,Integer memberId);
	public Vaccine updateVaccine(Integer vaccineId,Vaccine vaccine);
	public Boolean deleteVaccine(Integer vaccine);

}
