package com.covisafe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.security.SecuritySchemes;
import io.swagger.v3.oas.annotations.servers.Server;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "REST API", version = "1.1"),
security = {
	@SecurityRequirement(name = "basicAuth"), 
	@SecurityRequirement(name = "bearerToken")
	}, 
servers = {
	@Server(url = "/", description = "Default Server URL")
    	}
)
@SecuritySchemes({
@SecurityScheme(name = "basicAuth", type = SecuritySchemeType.HTTP, scheme = "basic"),
@SecurityScheme(name = "bearerToken", type = SecuritySchemeType.HTTP, scheme = "bearer", bearerFormat = "JWT")
})

public class CoviSafeWebServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(CoviSafeWebServicesApplication.class, args);
	}

}
