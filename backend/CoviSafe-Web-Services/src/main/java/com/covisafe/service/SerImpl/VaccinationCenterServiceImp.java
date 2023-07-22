package com.covisafe.service.SerImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covisafe.exception.VaccineNotFoundException;
import com.covisafe.modal.VaccinationCenter;
import com.covisafe.repository.VaccinationCenterRepository;
import com.covisafe.service.VaccinationCenterService;
@Service
public class VaccinationCenterServiceImp implements VaccinationCenterService {

	@Autowired
	private VaccinationCenterRepository vaccinationCenterRepository;
	
	@Override
	public List<VaccinationCenter> getAllVaccinationCenter() {
		return vaccinationCenterRepository.findAll();
	}

	@Override
	public VaccinationCenter getVaccination(Integer centerId) {
		if(centerId==null) throw new VaccineNotFoundException("Please Provide Vaccination Center Id");
		Optional<VaccinationCenter> optional = vaccinationCenterRepository.findById(centerId);
		if(optional.isEmpty()) throw new VaccineNotFoundException("Vaccination Center Not Found By Given Id");
		return optional.get();
	}

	@Override
	public VaccinationCenter addVaccinationCenter(VaccinationCenter center) {
		if(center==null) throw new VaccineNotFoundException("Please Provide Vaccination Center Details");
		return vaccinationCenterRepository.save(center);
	}

	@Override
	public VaccinationCenter updateVaccineCenter(Integer centerId , VaccinationCenter center) {
		if(centerId==null) throw new VaccineNotFoundException("Please Provide Vaccination Center Id");
		if(center==null) throw new VaccineNotFoundException("Please Provide Vaccination Center");
		center.setCenterId(centerId);
		return vaccinationCenterRepository.save(center);
	}

	@Override
	public Boolean deleteVaccinationCenter(Integer centerId) {
		if(centerId==null) throw new VaccineNotFoundException("Please Provide Vaccination Center Id");
		vaccinationCenterRepository.deleteById(centerId);
		return true;
	}

}
