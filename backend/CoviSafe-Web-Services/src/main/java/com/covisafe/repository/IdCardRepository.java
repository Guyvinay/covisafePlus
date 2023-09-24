package com.covisafe.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covisafe.modal.IdCard;

public interface IdCardRepository extends JpaRepository<IdCard, String> {

//	@Query("SELECT m FROM Member m JOIN m.idcard u WHERE u.aadharNo=:aadharN")
//	@Query("Select i From IdCard i JOIN i.user u where u.userId =:uuid" )
//	public Optional<IdCard> findByUserId(String uuid);
	public List<IdCard> findByAadharNo(String aadharNo);
	public List<IdCard> findByPanNo(String panNo);

}
