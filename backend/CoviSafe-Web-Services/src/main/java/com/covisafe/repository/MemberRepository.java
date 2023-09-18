package com.covisafe.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.covisafe.modal.Member;

public interface MemberRepository extends JpaRepository<Member, String> {
	
	@Query("SELECT m FROM Member m JOIN m.idcard u WHERE u.aadharNo=:aadharN")
	public Optional<Member> findByAadharNo(String aadharN);
	
	@Query("SELECT m FROM Member m JOIN m.idcard u WHERE u.panNo=:panNo")
	public Optional<Member> findByPanNo(String panNo);
}
