import React from "react";
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
      <div className="homepage">
      <p className="fincare-text">FinCare</p>
      <p className="message">Your Personal Finance Manager</p>
      <div className="homepage-buttons">
        <Link to="/" className="btn btn-primary">Login</Link>
        <Link to="/register" className="btn btn-secondary">Register</Link>
      </div>
    </div>
    );
  }
  
  export default Home;