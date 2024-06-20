package com.example.finance.serviceimpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finance.dto.EmployeeDto;
import com.example.finance.dto.LoginDto;
import com.example.finance.entity.Employee;
import com.example.finance.mapper.EmployeeMapper;
import com.example.finance.repository.EmployeeRepo;
import com.example.finance.response.LoginResponse;
import com.example.finance.service.EmployeeServ;

@Service
public class EmployeeServimpl implements EmployeeServ{
	@Autowired
	private EmployeeRepo emplRepo;

	@Override
	public EmployeeDto createEmployee(EmployeeDto empl) {
		Employee employee=EmployeeMapper.mapToEmployee(empl);
		emplRepo.save(employee);
		return EmployeeMapper.mapToEmployeeDto(employee);
	}

	@Override
	public LoginResponse loginEmployee(LoginDto logindto) {
	        Employee employee1 = emplRepo.findById(logindto.getSoeid()).orElse(null);
	        if (employee1 != null) {
	            String password = logindto.getPassword();
	            String pass1 = employee1.getPassword();
	            Boolean isPwdRight =password.equals(pass1);
	            if (isPwdRight) {
	                Optional<Employee> employee = emplRepo.findOneBySoeidAndPassword(logindto.getSoeid(), pass1);
	                if (employee.isPresent()) {
	                    return new LoginResponse("Login Successfull", true);
	                } else {
	                    return new LoginResponse("Login Failed", false);
	                }
	            } else {
	                return new LoginResponse("password Not Match", false);
	            }
	        }else {
	            return new LoginResponse("soeid not exits", false);
	        }
	    }


}
