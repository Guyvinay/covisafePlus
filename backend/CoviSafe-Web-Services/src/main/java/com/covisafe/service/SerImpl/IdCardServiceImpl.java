package com.covisafe.service.SerImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covisafe.exception.IdCardNotFoundException;
import com.covisafe.modal.IdCard;
import com.covisafe.repository.IdCardRepository;
import com.covisafe.service.IdCardService;



@Service
public class IdCardServiceImpl implements IdCardService {

	@Autowired
	private IdCardRepository IdCardRepository;

	@Override
	public List<IdCard> getAllIdCard() {
		List<IdCard> list = IdCardRepository.findAll();
		if (list.isEmpty())
			throw new IdCardNotFoundException("Not any IdCard to show");
		return list;
	}

	@Override
	public IdCard getIdCardById(String id) {
		if (id == null)
			throw new IdCardNotFoundException("Please provide id of IdCard to show");
		Optional<IdCard> optional = IdCardRepository.findById(id);
		if (optional.isEmpty())
			throw new IdCardNotFoundException("IdCard Not Found of id:-" + id);
		return optional.get();
	}

	@Override
	public IdCard getIdCardByAadharNo(String aadharNo) {

		List<IdCard> list = IdCardRepository.findByAadharNo(aadharNo);
		if (list.size() == 0)
			throw new IdCardNotFoundException("IdCard Not Found of aadhar:-" + aadharNo);
		return list.get(list.size() - 1);
	}

	@Override
	public IdCard getIdCardByPanNo(String panNo) {
		List<IdCard> list = IdCardRepository.findByPanNo(panNo);
		if (list.size() == 0)
			throw new IdCardNotFoundException("IdCard Not Found of aadhar:-" + panNo);
		return list.get(list.size() - 1);
	}

	@Override
	public IdCard addIdCard(IdCard IdCard) {
		if (IdCard == null)
			throw new IdCardNotFoundException("Please provide IdCard details");
		return IdCardRepository.save(IdCard);
	}

	@Override
	public IdCard updateIdCard(String IdCardId, IdCard IdCard) {

		Optional<IdCard> optional = IdCardRepository.findById(IdCardId);
		if (optional.isEmpty())
			throw new IdCardNotFoundException("IdCard not found by given id");
		if (IdCard == null)
			throw new IdCardNotFoundException("Please provide IdCard details");
		IdCard.setUserId(IdCardId);
		return IdCardRepository.save(IdCard);
	}

	@Override
	public Boolean deleteIdCard(String id) {
		IdCardRepository.deleteById(id);
		return true;
	}

}
