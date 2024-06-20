package com.example.finance.service;

import com.example.finance.dto.EmployeeDto;
import com.example.finance.dto.LoginDto;
import com.example.finance.response.LoginResponse;

public interface EmployeeServ {
public EmployeeDto createEmployee(EmployeeDto empl);
public LoginResponse loginEmployee(LoginDto logindto);
}
