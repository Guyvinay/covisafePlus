package com.covisafe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covisafe.modal.IdCard;

public interface IdCardRepository extends JpaRepository<IdCard, Integer> {

	public List<IdCard> findByAadharNo(String aadharNo);
	public List<IdCard> findByPanNo(String panNo);

}
