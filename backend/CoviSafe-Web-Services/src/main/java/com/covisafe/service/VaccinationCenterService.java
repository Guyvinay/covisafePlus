package com.covisafe.service;

import java.util.List;
import com.covisafe.modal.VaccinationCenter;

public interface VaccinationCenterService {
	
	public List<VaccinationCenter> getAllVaccinationCenter();
	public VaccinationCenter getVaccination(String centerId);
	public VaccinationCenter addVaccinationCenter(VaccinationCenter center);
	public VaccinationCenter updateVaccineCenter(String centerId , VaccinationCenter center);
	public Boolean deleteVaccinationCenter(String centerId);
	
}
