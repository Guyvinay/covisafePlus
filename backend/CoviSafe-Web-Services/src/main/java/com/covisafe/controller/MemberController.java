package com.covisafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.covisafe.modal.Member;
import com.covisafe.service.MemberService;

/*
 
 {
 "dose1Status":false,
 "dose2Status":false,
 "dose1Date":"2020-01-01",
 "dose2Date":"2021-03-04"
 }
 
 */

@RestController
@CrossOrigin("*")
public class MemberController {

	@Autowired
	private MemberService memberService;

	@PostMapping(value = "/members/{userId}")
	public ResponseEntity<Member> saveMember(@PathVariable String userId , @RequestBody Member members){
		return new ResponseEntity<Member>(memberService.addMember(members, userId) , HttpStatus.ACCEPTED);
	}
	@GetMapping(value = "/members/{id}")
	public ResponseEntity<Member> getMember(@PathVariable String id){
		return new ResponseEntity<Member>(memberService.getMemberById(id) , HttpStatus.ACCEPTED);
	}

//	@GetMapping(value = "/members/pageNo/limit/sortBy")
	
//	public ResponseEntity<List<Member>> getAllMembers(@RequestParam(required = false) Integer pageNo,@RequestParam(required = false) Integer limit,@RequestParam(required = false) String sortBy){
	@GetMapping(value = "/members")
	public ResponseEntity<List<Member>> getAllMembers(){

	return new ResponseEntity<List<Member>>(memberService.getAllMember(), HttpStatus.ACCEPTED);
	}

	@GetMapping(value = "/members/aadhar/{aadhar}")
	public ResponseEntity<Member> getMembersByAadharNo(@PathVariable String aadhar){
		return new ResponseEntity<Member>(memberService.getMemberByAadharNo(aadhar), HttpStatus.ACCEPTED);
	}
	@GetMapping(value = "/members/pan/{pan}")
	public ResponseEntity<Member> getMembersByPanNo(@PathVariable String pan){
		return new ResponseEntity<Member>(memberService.getMemberByPanNo(pan), HttpStatus.ACCEPTED);
	}

}