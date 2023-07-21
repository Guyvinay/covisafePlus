package com.covisafe.service;

import java.util.List;
import com.covisafe.modal.VaccinationCenter;

public interface VaccinationCenterService {
	
	public List<VaccinationCenter> getAllVaccinationCenter();
	public VaccinationCenter getVaccination(int centerid);
	public VaccinationCenter addVaccinationCenter(VaccinationCenter center);
	public VaccinationCenter updateVaccineCenter(VaccinationCenter center);
	public Boolean deleteVaccinationCenter(VaccinationCenter center);
	
}
