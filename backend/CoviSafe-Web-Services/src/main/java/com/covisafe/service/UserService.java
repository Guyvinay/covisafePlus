package com.covisafe.service;

import com.covisafe.controller.AuthenticationRequest;
import com.covisafe.controller.AuthenticationResponse;
import com.covisafe.modal.IdCard;
import com.covisafe.modal.User;

public interface UserService {
	AuthenticationResponse signInUser(AuthenticationRequest authenticationRequest);

	AuthenticationResponse register(IdCard user);
}
