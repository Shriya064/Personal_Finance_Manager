import { useState } from "react";
import axios from "axios";
import './Register.css';

function Register() {
  
    const [soeid, setSoeid] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/employee/save", {
          soeid: soeid,
          email: email,
          password: password,
          });
          alert("Registation is Successfull");

        } catch (err) {
          alert(err);
        }
      }
  
    return (
      <div className="registration-container">
      <form className="registration-form">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="soeid">SOEID:</label>
          <input type="text" id="soeid" name="soeid" required />
        </div>
        <div className="form-group">
          <label htmlFor="citiEmail">Citi Email:</label>
          <input type="email" id="citiEmail" name="citiEmail" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
    );
  }
  
  export default Register;