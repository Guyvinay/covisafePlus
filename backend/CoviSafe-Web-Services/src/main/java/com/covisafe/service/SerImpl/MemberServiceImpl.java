package com.covisafe.service.SerImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.covisafe.exception.InvalidArgumentsException;
import com.covisafe.exception.InvalidUserException;
import com.covisafe.exception.UserNotFoundException;
import com.covisafe.modal.Member;
import com.covisafe.modal.User;
import com.covisafe.repository.MemberRepository;
import com.covisafe.repository.UserRepository;
import com.covisafe.service.MemberService;
@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	private MemberRepository memberRepository;
	
	@Autowired
	private UserRepository userRepository;
	

	public List<Member> getAllMember(Integer pageNo, Integer limit, String sortBy) throws InvalidArgumentsException {
		if (pageNo == null && limit == null && sortBy.equals(null))
			return memberRepository.findAll();
		else if (pageNo != null && limit != null && sortBy.equals(null)) {
			Pageable page = PageRequest.of(pageNo, limit);
			return memberRepository.findAll(page).getContent();
		} else if (pageNo != null && limit != null && !sortBy.equals(null)) {
			Pageable page = PageRequest.of(pageNo, limit, Sort.by(sortBy));
			return memberRepository.findAll(page).getContent();
		} else {
			throw new InvalidArgumentsException("please pass correct fields to get the pagewise data");
		}
	}

	public Member getMemberById(Integer id) throws InvalidUserException {
		return memberRepository.findById(id)
				.orElseThrow(() -> new InvalidUserException("can't find any user with id " + id));
	}

	public Member getMemberByAadharNo(String aadharNo) {
		return memberRepository.findByAadharNo(aadharNo)
				.orElseThrow(() -> new InvalidUserException("can't find any user with aadharNo " + aadharNo));
	}

	public Member getMemberByPanNo(String panNo) {
		return memberRepository.findByPanNo(panNo)
				.orElseThrow(() -> new InvalidUserException("can't find any user with panNo " + panNo));
//		return null;
	}

	public Member addMember(Member member, Integer userId ) {
		if (member == null)
			throw new InvalidArgumentsException("Please pass the correct member details");
		if (member.getId() != null) {
			if (memberRepository.findById(member.getId()).orElse(null) != null) {
				throw new InvalidUserException("User already present in database ");
			}
		}
		Optional<User> optional = userRepository.findById(userId);
		if(optional.isEmpty()) throw new UserNotFoundException("Provided User doesn't exist , Register user first");
		member.setUser(optional.get());
		return memberRepository.save(member);
	}

	public Member updateMember(Member member) {
		if (member == null)
			throw new InvalidArgumentsException("Please pass the correct member details");
		if (memberRepository.findById(member.getId()).orElse(null) == null) {
			throw new InvalidUserException("User not found in database ");
		}
		return memberRepository.save(member);
	}

	public Boolean deleteMember(Integer id) {
		if (id == null)
			throw new InvalidArgumentsException("Please pass the correct member details");
		Member member = memberRepository.findById(id).orElse(null);
		if (member == null) {
			throw new InvalidUserException("User not found in database ");
		}
		memberRepository.delete(member);
		return true;
	}

	
}
