import React from "react";
import { Link } from 'react-router-dom';
import './Home.css'
import logo from '../util/piggy logo 3.png'
import track from '../util/track-image.png';
import bills from '../util/bills.png';
import dashboard from '../util/dashboard-image.png';


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
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/register" className="btn btn-secondary">Register</Link>
        </div>
        <hr className="hr-element"/>
      </section>
      
      <section className="features-container">
        <h2>Features</h2>
        <div className="feature track">
          <h3>Track your expenditures</h3>
          <img src={track} alt="record-png" className="track-image" />
        </div>
        <div className="feature bills">
          <img src={bills} alt="record-png" className="bills-image" />
          <h3>Save your bills at one place</h3>
        </div>
        <div className="feature 1">
          <h3>All-in-one Dashboard View</h3>
          <img src={dashboard} alt="record-png" />
        </div>
      </section>
      <hr className="hr-element"/>
      <div className="teams-section">
        <h2>Brought to you by</h2>
        <h1>The Code Rangers</h1>
        <div class="team-container">
          <div class="team-member">
            <img src="path/to/member1.jpg" alt="Member 1" class="team-photo"/>
            <h3 class="team-name">Member 1</h3>
            <p class="team-title">Title 1</p>
          </div>
          <div class="team-member">
            <img src="path/to/member2.jpg" alt="Member 2" class="team-photo"/>
            <h3 class="team-name">Member 2</h3>
            <p class="team-title">Title 2</p>
          </div>
          <div class="team-member">
            <img src="path/to/member3.jpg" alt="Member 3" class="team-photo"/>
            <h3 class="team-name">Member 3</h3>
            <p class="team-title">Title 3</p>
          </div>
          <div class="team-member">
            <img src="path/to/member3.jpg" alt="Member 3" class="team-photo"/>
            <h3 class="team-name">Member 4</h3>
            <p class="team-title">Title 4</p>
          </div>
          <div class="team-member">
            <img src="path/to/member3.jpg" alt="Member 3" class="team-photo"/>
            <h3 class="team-name">Member 4</h3>
            <p class="team-title">Title 4</p>
          </div>
      </div>
      </div>
    </>
    );
  }
  
  export default Home;