package com.covisafe.service.SerImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covisafe.exception.InvalidArgumentsException;
import com.covisafe.exception.InvalidUserException;
import com.covisafe.exception.UserNotFoundException;
import com.covisafe.exception.VaccineNotFoundException;
import com.covisafe.modal.Member;
import com.covisafe.modal.Vaccine;
import com.covisafe.repository.MemberRepository;
import com.covisafe.repository.VaccineRepository;
import com.covisafe.service.VaccineService;

@Service
public class VaccineServiceImp implements VaccineService {
	
	@Autowired
	private VaccineRepository vaccineRepository;
	@Autowired
	private MemberRepository memberRepository;
	@Override
	public List<Vaccine> getAllVaccine() {
		List<Vaccine> list = vaccineRepository.findAll();
		if(list.size()==0) throw new VaccineNotFoundException("Vaccine Not Found");
		return list;
	}

	@Override
	public Vaccine getVaccineByName(String vaccineName) {
		return vaccineRepository.findByVaxName(vaccineName).get();
	}

	@Override
	public Vaccine getVaccineById(Integer vaccineId) {
		return vaccineRepository.findById(vaccineId).get();
	}

	@Override
	public Vaccine addVaccine(Vaccine vaccine, Integer memberId) {
		if(vaccine == null)
			throw new InvalidArgumentsException("Please pass the correct Vaccine details");
				
		Optional<Member> MemberfindById = memberRepository.findById(memberId);
		if(MemberfindById.isEmpty())
			throw new UserNotFoundException("Member Not Found");
		
//		MemberfindById.get().setVaccine(vaccine);
		vaccine.setMember(MemberfindById.get());
		
//cascading check
		
		return vaccineRepository.save(vaccine);
	}

	@Override
	public Vaccine updateVaccine(Integer vaccineId, Vaccine vaccine) {
		if(vaccine == null)
			throw new InvalidArgumentsException("Please pass the correct Vaccine details");
		
		Vaccine findById = vaccineRepository.findById(vaccineId).orElseThrow(()-> new VaccineNotFoundException("NO Vaccine Found"));
		
		vaccine.setId(vaccineId);
		
		
		return vaccineRepository.save(vaccine);
	}

	@Override
	public Boolean deleteVaccine(Integer vaccineId) {
		Optional<Vaccine> findById = vaccineRepository.findById(vaccineId);
		if(findById.isEmpty())
			throw new VaccineNotFoundException("Given Vaccine Does Not Exist");
		
		vaccineRepository.deleteById(vaccineId);
		return true;
	}

}
