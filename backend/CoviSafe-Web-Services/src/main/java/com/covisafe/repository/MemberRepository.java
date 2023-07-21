package com.covisafe.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.covisafe.modal.Member;

public interface MemberRepository extends JpaRepository<Member, Integer> {
	@Query("SELECT m FROM Member m JOIN m.user u WHERE u.aadharNo=:aadharN")
	public Optional<Member> findByAadharNo(Long aadharN);
//	public Optional<Member> findByPanNo(String panNo);
}
