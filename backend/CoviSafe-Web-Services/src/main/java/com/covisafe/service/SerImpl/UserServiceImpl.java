package com.covisafe.service.SerImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covisafe.modal.User;
import com.covisafe.repository.UserRepository;
import com.covisafe.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<User> getAllUser() {
		  
		return userRepository.findAll();
	}

	@Override
	public User getUserById(Integer id) {
		  
		return userRepository.findById(id).get();
	}

	@Override
	public User getUserByAadharNo(Long aadharNo) {
		  
		return null;
	}

	@Override
	public User getUserByPanNo(String panNo) {
		  
		return null;
	}

	@Override
	public User addUser(User user) {
		  
		return userRepository.save(user);
	}

	@Override
	public User updateUser(User user) {
		
		
		
		return null;
	}

	@Override
	public Boolean deleteUser(Integer id) {
		  
		return null;
	}

}
