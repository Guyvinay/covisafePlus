package com.covisafe.service;

import java.util.List;

import com.covisafe.exception.InvalidArgumentsException;
import com.covisafe.exception.InvalidUserException;
import com.covisafe.modal.Member;

public interface MemberService {

	public List<Member> getAllMember()throws InvalidArgumentsException;
	public Member getMemberById(String id) throws InvalidUserException;
	public Member getMemberByAadharNo(String aadharNo);
	public Member getMemberByPanNo(String panNo);
	public Member addMember(Member member, String userId );
	public Member updateMember(Member member);
	public Boolean deleteMember(String id);	
	
}
