package com.covisafe.service.SerImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covisafe.exception.VaccineNotFoundException;
import com.covisafe.modal.Member;
import com.covisafe.modal.VaccineRegistration;
import com.covisafe.repository.MemberRepository;
import com.covisafe.service.VaccineRegistrationService;
@Service
public class VaccineRegistrationServiceImp implements VaccineRegistrationService {

	@Autowired
	private MemberRepository memberRepository;
	
	@Override
	public List<VaccineRegistration> getAllVaccineRegistration() {
		
		List<Member> list = memberRepository.findAll();
		if(list.size()==0) throw new VaccineNotFoundException("Not any Vaccine Registered");
		List<VaccineRegistration> vaxRegList = new ArrayList<>();
		list.stream().forEach(a->vaxRegList.add(a.getVaxRegistration()));
		return vaxRegList;
	}

	@Override
	public VaccineRegistration getVaccineRegistration(Long mobileNo) {
		 
		return null;
	}

	@Override
	public VaccineRegistration addVaccineRegistration(VaccineRegistration reg) {
		 
		return null;
	}

	@Override
	public VaccineRegistration updateVaccineRegistration(VaccineRegistration reg) {
		 
		return null;
	}

	@Override
	public boolean deleteVaccineRegistration(VaccineRegistration reg) {
		 
		return false;
	}

}
