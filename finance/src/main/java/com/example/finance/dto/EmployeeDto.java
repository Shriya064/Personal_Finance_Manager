package com.example.finance.dto;

import lombok.Data;

@Data
public class EmployeeDto {
private String soeid;
private String email;
private String password;
public EmployeeDto(String soeid, String email, String password) {
	super();
	this.soeid = soeid;
	this.email = email;
	this.password = password;
}
public String getSoeid() {
	return soeid;
}
public void setSoeid(String soeid) {
	this.soeid = soeid;
}

public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public EmployeeDto() {
}

}
