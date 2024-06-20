package com.example.finance.dto;

import lombok.Data;

@Data
public class LoginDto {
	private String soeid;
	private String password;
	public LoginDto(String soeid, String password) {
		super();
		this.soeid = soeid;
		this.password = password;
	}
	public String getSoeid() {
		return soeid;
	}
	public void setSoeid(String soeid) {
		this.soeid = soeid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public LoginDto() {
	}
	
	
}
