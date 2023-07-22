package com.covisafe.service.SerImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covisafe.modal.VaccineRegistration;
import com.covisafe.repository.VaccineRegistrationRepository;
import com.covisafe.service.VaccineRegistrationService;
@Service
public class VaccineRegistrationServiceImp implements VaccineRegistrationService {
	
	@Autowired
	private VaccineRegistrationRepository vaccineRegistrationRepository;
	@Override
	public List<VaccineRegistration> getAllVaccineRegistration() {
		// TODO Auto-generated method stub
		return vaccineRegistrationRepository.findAll();
	}

	@Override
	public VaccineRegistration getVaccineRegistration(Long mobileNo) {

//		return vaccineRegistrationRepository;
		return null;
	}

	@Override
	public VaccineRegistration addVaccineRegistration(VaccineRegistration reg) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VaccineRegistration updateVaccineRegistration(VaccineRegistration reg) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteVaccineRegistration(VaccineRegistration reg) {
		// TODO Auto-generated method stub
		return false;
	}

}
