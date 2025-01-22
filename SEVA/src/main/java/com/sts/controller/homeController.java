package com.sts.controller;
import org.springframework.web.bind.annotation.*;
@RestController
public class homeController {
	@GetMapping("/")
public String index()
{
	return "welcome to spring boot crud operation";
}
	
}
