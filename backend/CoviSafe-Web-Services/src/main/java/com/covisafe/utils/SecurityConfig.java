package com.covisafe.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

	@Autowired
	private AuthenticationProvider authenticationProvider;
	
	@Autowired
	private JWTAuthenticationFilter authenticationFilter;
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		
		http.authorizeHttpRequests(auth->{
			auth.
			 	
				requestMatchers(HttpMethod.POST,"/users/register")
				.permitAll()
				.requestMatchers(HttpMethod.POST,"/users/signin")
				.permitAll()
				.requestMatchers("/swagger-ui/**","/v3/api-docs/**")
				.permitAll()
				.anyRequest()
				.authenticated();
		})
		.cors(
				cors->cors.disable()
		)
		.csrf(
				Csrf->Csrf.disable()
		)
		.sessionManagement(
				session -> session
							.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		)
		.authenticationProvider(authenticationProvider)
		.addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);
		
		return http.build();
		
	}
	
}
