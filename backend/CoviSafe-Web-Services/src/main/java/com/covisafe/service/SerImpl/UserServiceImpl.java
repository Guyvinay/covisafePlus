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
		List<User> list = userRepository.findAll();
		if(list.isEmpty()) throw new UserNotFoundException("Not any User to show");
		return list;
	}

	@Override
	public User getUserById(Integer id) {
		  if(id==null) throw new UserNotFoundException("Please provide id of User to show");
		 Optional<User> optional = userRepository.findById(id);
		 if(optional.isEmpty())throw new UserNotFoundException("User Not Found of id:-"+id);
		 return optional.get();
	}

	@Override
	public User getUserByAadharNo(String aadharNo) {
		
		List<User> list = userRepository.findByAadharNo(aadharNo);
		if(list.size()==0) throw new UserNotFoundException("User Not Found of aadhar:-"+aadharNo);
		return list.get(list.size()-1);
	}

	@Override
	public User getUserByPanNo(String panNo) {
		List<User> list = userRepository.findByAadharNo(panNo);
		if(list.size()==0) throw new UserNotFoundException("User Not Found of aadhar:-"+panNo);
		return list.get(list.size()-1);
	}

	@Override
	public User addUser(User user) {
		  if(user == null) throw new UserNotFoundException("Please provide user details");
		return userRepository.save(user);
	}

	@Override
	public User updateUser(Integer userId , User user) {
		
		Optional<User> optional = userRepository.findById(userId);
		if(optional.isEmpty()) throw new UserNotFoundException("User not found by given id");
		if(user==null) throw new UserNotFoundException("Please provide user details");
		user.setId(userId);
		return userRepository.save(user);
	}

	@Override
	public Boolean deleteUser(Integer id) {
		  userRepository.deleteById(id);
		return true;
	}

}
