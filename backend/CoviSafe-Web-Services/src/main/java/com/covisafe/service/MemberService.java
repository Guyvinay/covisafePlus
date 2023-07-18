package com.covisafe.service;

import java.util.List;

import com.covisafe.modal.Member;

public interface MemberService {

	public List<Member> getAllMember();
	public Member getMemberById(Integer id);
	public Member getMemberByAadharNo(Long aadharNo);
	public Member getMemberByPanNo(String panNo);
	public Member addMember(Member member);
	public Member updateMember(Member member);
	public Boolean deleteMember(Integer id);	
	
}
