package com.example.finance.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.finance.entity.Employee;

public interface EmployeeRepo extends JpaRepository<Employee,String>{
	Optional<Employee> findById(String soeid);
	Optional<Employee> findOneBySoeidAndPassword(String soeid,String Password);

}
