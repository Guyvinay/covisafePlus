package com.covisafe.utils;

import java.security.Key;
import java.util.Date;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

	public boolean isTokenValid(String token, UserDetails userDetails) {
		final String username = extractUsername(token);
		return (username.equals(userDetails.getUsername())&&(!isTokenExpired(token)));
	}

	public String extractUsername(String token) {
		return extractClaim(token, Claims::getSubject);
	}

	public boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}
	
	private Date extractExpiration(String token) {
		return extractClaim(token, Claims::getExpiration);
	}

	public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = extractAllClaims(token);
		return claimsResolver.apply(claims);
	}
	
	public Claims extractAllClaims(String token) {
		return Jwts
				.parserBuilder()
				.setSigningKey(getSiginKey())
				.build()
				.parseClaimsJws(token)
				.getBody();
	}

	private Key getSiginKey() {
		byte[] keyByte = Decoders.BASE64.decode(SecurityDetails.JWT_KEY);
		
		return Keys.hmacShaKeyFor(keyByte);
	}
}
