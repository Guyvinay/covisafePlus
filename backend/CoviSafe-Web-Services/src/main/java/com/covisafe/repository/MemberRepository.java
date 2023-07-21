package com.covisafe.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covisafe.modal.Member;

public interface MemberRepository extends JpaRepository<Member, Integer> {
	public Optional<Member> findByAadharNo(Long aadharNo);
	public Optional<Member> findByPanNo(String panNo);
}
