package com.covisafe.service;

import java.util.List;

import com.covisafe.modal.User;

public interface UserService {

	public List<User> getAllUser();
	public User getUserById(Integer id);
	public User getUserByAadharNo(Long aadharNo);
	public User getUserByPanNo(String panNo);
	public User addUser(User member);
	public User updateUser(User member);
	public Boolean deleteUser(Integer id);
	
}
