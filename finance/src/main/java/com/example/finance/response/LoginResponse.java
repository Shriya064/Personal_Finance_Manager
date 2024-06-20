package com.example.finance.response;

public class LoginResponse {
	private String message;
	private boolean status;
	public LoginResponse(String message,boolean status) {
		super();
		this.message = message;
		this.status = status;
	}
	public LoginResponse() {
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public boolean getStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	
}
