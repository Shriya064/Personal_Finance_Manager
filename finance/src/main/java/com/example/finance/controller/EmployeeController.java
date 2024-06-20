package com.example.finance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.finance.dto.EmployeeDto;
import com.example.finance.dto.LoginDto;
import com.example.finance.response.LoginResponse;
import com.example.finance.service.EmployeeServ;

@RestController
@CrossOrigin
@RequestMapping("api/v1/employee")
public class EmployeeController {
	@Autowired
	private EmployeeServ emplserv;
	@PostMapping("/save")
	public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto empldto){
		EmployeeDto employeeDto=emplserv.createEmployee(empldto);
		return new ResponseEntity<>(employeeDto,HttpStatus.CREATED);
	}
	 @PostMapping("/login")
	    public ResponseEntity<?> loginEmployee(@RequestBody LoginDto loginDto)
	    {
	        LoginResponse loginResponse = emplserv.loginEmployee(loginDto);
	        return new ResponseEntity<>(loginResponse,HttpStatus.OK);
	    }
}
