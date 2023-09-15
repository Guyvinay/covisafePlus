package com.covisafe.utils;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.covisafe.exception.InvalidUserException;
import com.covisafe.repository.UserRepository;

@Configuration
public class AppConfig {

	@Autowired
	private UserRepository userRepository;
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public UserDetailsService userDetailsService() {
		return username -> 
				userRepository
				.findByEmail(username)
				.orElseThrow(
						()->
					new InvalidUserException(
							"can't find any user with username " + username
					)
				);
	}
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
		return authenticationConfiguration
				.getAuthenticationManager();
	}
	
	@Bean
	public AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		
		authenticationProvider
		.setUserDetailsService(userDetailsService());
		
		authenticationProvider
		.setPasswordEncoder(passwordEncoder());
		
		return authenticationProvider;
	}
	
}