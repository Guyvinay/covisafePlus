package com.covisafe.controller;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class AuthenticationResponse {
	private String token;
	private Date issuedAt;
	private Date expiredAt;
}
