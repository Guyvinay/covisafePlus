package com.covisafe.service;

import com.covisafe.controller.AuthenticationRequest;
import com.covisafe.controller.AuthenticationResponse;
import com.covisafe.modal.User;

public interface UserService {
	AuthenticationResponse register(User user);

	AuthenticationResponse signInUser(AuthenticationRequest authenticationRequest);
}
