import React from "react";
import { Link } from 'react-router-dom';
import './Home.css'
import logo from '../util/piggy logo 3.png'


function Home() {
    return (
      <>
      <div className="navbar-container"> 
        <img src={logo} alt="logo" />    
        <p className="fincare-text">FinCare</p>
      </div>  
      <section className="main-content-container">
          <div className="tag-lines">
          <p className="tagline-1">Your Personal Finance Manager</p>
          <p className="tagline-2">Track. Save. Thrive.</p>
          <p className="tagline-3">Smart money management starts here!</p>
          </div>
        <div className="homepage-buttons">
        <Link to="/" className="btn btn-primary">Login</Link>
        <Link to="/register" className="btn btn-secondary">Register</Link>
        </div>
      </section>
    </>
    );
  }
  
  export default Home;