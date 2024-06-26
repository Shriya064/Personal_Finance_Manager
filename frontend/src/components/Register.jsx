import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [soeid, setSoeid] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();

        // Validate inputs
        if (!soeid || !email || !password) {
            setError("All fields are required.");
            return;
        }

        try {
            await axios.post("http://localhost:8080/api/v1/employee/save", {
                soeid: soeid,
                email: email,
                password: password,
            });
            alert("Registration is Successful");
            setError("");  // Clear error message on successful registration
            setSoeid("");  // Clear SOEID field
            setEmail("");  // Clear email field
            setPassword("");  // Clear password field
            navigate("/home");  // Navigate to home page
        } catch (err) {
            alert("Error: " + err.message);
        }
    }

    return (
        <div className="container mt-5">
           
                <div className="card-body">
                    <h1 className="card-title text-center">Registration</h1>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={save}>
                        <div className="form-group">
                            <label htmlFor="soeid">Soeid</label>
                            <input
                                type="text"
                                className="form-control"
                                id="soeid"
                                placeholder="Enter SOEID"
                                value={soeid}
                                onChange={(event) => setSoeid(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Citi Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter Citi Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-4 btn-block">
                            Save
                        </button>
                    </form>
                </div>
            
        </div>
    );
}

export default Register;
