package com.covisafe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.covisafe.modal.Member;

public interface MemberRepository extends JpaRepository<Member, Integer>{

	@Query("SELECT m FROM Member m JOIN m.user u JOIN u.aadharNo a WHERE a.aadharNo=:aadharN")
	public List<Member> findMemberByAadharNo(Long aadharN);
	
}
