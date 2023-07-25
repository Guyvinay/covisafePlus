package com.covisafe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covisafe.modal.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	public List<User> findByAadharNo(String aadharNo);
	public List<User> findByPanNo(String panNo);

}
