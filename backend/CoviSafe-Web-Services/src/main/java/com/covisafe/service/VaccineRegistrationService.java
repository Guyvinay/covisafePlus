package com.covisafe.service;

import java.util.List;

import com.covisafe.modal.VaccineRegistration;

public interface VaccineRegistrationService {
	public List<VaccineRegistration> getAllVaccineRegistration();
	public VaccineRegistration getVaccineRegistration(Long mobileNo);
	public VaccineRegistration addVaccineRegistration(VaccineRegistration reg);
	public VaccineRegistration updateVaccineRegistration(VaccineRegistration reg);
	public boolean deleteVaccineRegistration(VaccineRegistration reg);
}
