package com.example.finance.mapper;

import com.example.finance.dto.EmployeeDto;
import com.example.finance.entity.Employee;

public class EmployeeMapper {
public static EmployeeDto mapToEmployeeDto(Employee employee) {
	return new EmployeeDto(employee.getSoeid(),employee.getEmail(),employee.getPassword());
}
public static Employee mapToEmployee(EmployeeDto employeedto) {
	return new Employee(employeedto.getSoeid(),employeedto.getEmail(),employeedto.getPassword());
}
}
