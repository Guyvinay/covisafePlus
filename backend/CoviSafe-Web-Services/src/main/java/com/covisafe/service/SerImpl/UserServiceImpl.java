package com.covisafe.service.SerImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covisafe.exception.UserNotFoundException;
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
	public User getUserByAadharNo(String aadharNo) {
		
		return userRepository.findByAadharNo(aadharNo).get();
	}

	@Override
	public User getUserByPanNo(String panNo) {
		  
		return userRepository.findByPanNo(panNo).get();
	}

	@Override
	public User addUser(User user) {
		  
		return userRepository.save(user);
	}

	@Override
	public User updateUser(Integer userId , User user) {
		
		Optional<User> optional = userRepository.findById(userId);
		if(optional.isEmpty()) throw new UserNotFoundException("User not found by given id");
		if(user==null) throw new UserNotFoundException("User not found by given id");
		user.setId(userId);
		return userRepository.save(user);
	}

	@Override
	public Boolean deleteUser(Integer id) {
		  userRepository.deleteById(id);
		return true;
	}

}
