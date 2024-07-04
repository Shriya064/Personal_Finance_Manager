import React from "react";
import { Link } from 'react-router-dom';
import './Home.css'
import logo from '../util/piggy logo 3.png'
import track from '../util/track-image.png';
import bills from '../util/bills.png';
import dashboard from '../util/dashboard-image.png';
import illus from '../util/homepage-money-illus.jpg';


function Home() {
    return (
      <div className="overall-hp-container">
      <div className="navbar-container"> 
        <img src={logo} alt="logo" />         
        <p className="fincare-text">FinCare</p>
        <p className="pm-text">Your Personal Finance Manager</p> 
      </div>  
     
      <div className="homepage-tagline-illus-container">
      <section className="main-content-container">
          <div className="tag-lines">
          <p className="tagline-1">Track. Save. Thrive.</p>
          <p className="tagline-2">Smart money management starts here!</p>
          </div>
        <div className="homepage-buttons">
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/register" className="btn btn-secondary">Register</Link>
        </div>
      </section>
      <section className="illustration">
        <img src={illus} alt="" />
      </section>
      </div>
    {/* <hr className="hr-element"/>  */}
    <h2 className="feature-text">Features</h2>
      <section className="features-container">
        <div className="feature track">
          <h3>Track your expenditures</h3>
          <img src={track} alt="record-png" className="track-image" />
        </div>
        <div className="feature bills">
          <h3>Save your bills at one place</h3>
          <img src={bills} alt="record-png" className="bills-image" />
        </div>
        <div className="feature 1">
          <h3>All-in-one Dashboard View</h3>
          <img src={dashboard} alt="record-png" />
        </div>
      </section>
      <h2 className="btyb-text">Brought to you by</h2>
      <div className="teams-section">
        <h1 className="coderangers-text">The Code Rangers</h1>
        <div class="team-container">
          <div class="team-member">
            <img src="path/to/member1.jpg" alt="Member 1" class="team-photo"/>
            <h3 class="team-name">Shriya Kale</h3>
            <p class="team-title">Title 1</p>
          </div>
          <div class="team-member">
            <img src="path/to/member2.jpg" alt="Member 2" class="team-photo"/>
            <h3 class="team-name">Shreya Bansal</h3>
            <p class="team-title">Title 2</p>
          </div>
          <div class="team-member">
            <img src="path/to/member3.jpg" alt="Member 3" class="team-photo"/>
            <h3 class="team-name">Sakshi Sihag</h3>
            <p class="team-title">Title 3</p>
          </div>
          <div class="team-member">
            <img src="path/to/member3.jpg" alt="Member 3" class="team-photo"/>
            <h3 class="team-name">Vaibhavi</h3>
            <p class="team-title">Title 4</p>
          </div>
          <div class="team-member">
            <img src="path/to/member3.jpg" alt="Member 3" class="team-photo"/>
            <h3 class="team-name">Hariharan</h3>
            <p class="team-title">Title 4</p>
          </div>
      </div>
      </div>
      <div className="footer">
        <h2>Made with love!</h2>
      </div>
    </div>
    );
  }
  
  export default Home;