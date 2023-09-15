package com.covisafe.service.SerImpl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.covisafe.controller.AuthenticationRequest;
import com.covisafe.controller.AuthenticationResponse;
import com.covisafe.exception.InvalidUserException;
import com.covisafe.modal.User;
import com.covisafe.repository.UserRepository;
import com.covisafe.service.UserService;
import com.covisafe.utils.JwtService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private AuthenticationManager authenticationManager;

	
	@Override
	public AuthenticationResponse register(User user) {
		if(user == null)
			throw new InvalidUserException("user can't be null");
		if(user.getUserId()!= null) {
			if(userRepository.findById(user.getUserId()).orElse(null) != null) {
				throw new InvalidUserException("user is already present in database with this id ");
			}
		}
		
		userRepository.save(user);
		var jwtToken = jwtService.generateToken(user);
		return new AuthenticationResponse(
				jwtToken,
				new Date(System.currentTimeMillis()),
				new Date(System.currentTimeMillis()+1000*60*24)
		);
	}

	@Override
	public AuthenticationResponse signInUser(AuthenticationRequest authenticationRequest) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						authenticationRequest
						.getEmail(),
						authenticationRequest
						.getPassword()
				)
		);
		
		User user = userRepository.findByEmail(
					authenticationRequest.getEmail()
				)
				.orElseThrow(
						()-> new InvalidUserException(
									"can't find any user with email "+authenticationRequest.getEmail()
								)
				);
		
		var jwtToken = jwtService.generateToken(user);
		return new AuthenticationResponse(
				jwtToken,
				new Date(
						System
						.currentTimeMillis()
				),
				new Date(
						System
						.currentTimeMillis()+1000*60*24
				)
		);		
		
	}

}
