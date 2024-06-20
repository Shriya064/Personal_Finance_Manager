package com.example.finance.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@Table(name="employee")
public class Employee {
@Id	
private String soeid;
@Column(name="email",nullable=false)
private String email;
@Column(name="password",nullable=false)
private String password;
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
public Employee(String soeid, String email, String password) {
	super();
	this.soeid = soeid;
	this.email = email;
	this.password = password;
}
public Employee() {
}

}
 