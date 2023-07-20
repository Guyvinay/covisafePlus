package com.covisafe.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covisafe.modal.User;

public interface UserRepository extends JpaRepository<User, Integer>{

//	public Optional<User> findByAadharNo(Long aadharNo);
//	public Optional<User> findByByPanNo(String BypanNo);
	
}
