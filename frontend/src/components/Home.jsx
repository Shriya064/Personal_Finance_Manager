import React from "react";
import { Link } from 'react-router-dom';
import './Home.css'
import logo from '../util/piggy logo 3.png'
import track from '../util/track-image.png';
import bills from '../util/bills.png';
import dashboard from '../util/dashboard-image.png';
import illus from '../util/homepage-money-illus.jpg';
import ds2 from '../util/data storage 2.jpg';
import update from '../util/update.jpg';


import tm1 from '../team-members/tm1.jpeg';
import tm2 from '../team-members/tm2.jpeg';
import tm3 from '../team-members/tm3.jpeg';
import tm4 from '../team-members/tm4.jpg';
import tm5 from '../team-members/tm5.png';



function Home() {
    return (
      <div className="overall-hp-container">
        <div className="navbar-container">
          <div className="logo-container"> 
            <img src={logo} alt="logo" />         
            <p className="fincare-text">FinCare</p>
            <p className="pm-text">Your Personal Finance Manager</p> 
          </div>
          <div className="navigation-buttons">
            <a href="#features"><button>Features</button></a>
            <a href="#team"><button>Our Team</button></a>
          </div>  
       </div>
      <div className="homepage-tagline-illus-container">
      <section className="main-content-container">
          <div className="tag-lines">
          <p className="app-definition">Your all-in-one personal finance manager that helps you keep track of your spending, get insights of your expense habits, and plan for the future.</p>
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
      
      <div id="features">
        <h2 className="feature-text">Features you get...</h2>
        <section className="featureboxes-container">
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
          <div className="feature 1">
            <h3>Data Storage and Retrieval</h3>
            <img src={ds2} alt="record-png" />
          </div>
          <div className="feature 1">
            <h3>Real-time expense update</h3>
            <img src={update} alt="record-png" />
          </div>
        </section>
     </div>
     
      
      <div id="team" className="teams-section">
        <h2 className="btyb-text">Meet the team...</h2>
        <h1 className="coderangers-text">The CodeRangers</h1>
        <div class="team-container">
          <div class="team-member">
            <img src={tm1} alt="Member 1" class="team-photo"/>
            <h3 class="team-name">Shriya Kale</h3>
            <p class="team-title">Frontend</p>
          </div>
          <div class="team-member">
            <img src={tm2} alt="Member 2" class="team-photo"/>
            <h3 class="team-name">Shreya Bansal</h3>
            <p class="team-title">Designer</p>
          </div>
          <div class="team-member">
            <img src={tm3} alt="Member 3" class="team-photo"/>
            <h3 class="team-name">Sakshi Sihag</h3>
            <p class="team-title">Frontend & Designer</p>
          </div>
          <div class="team-member">
            <img src={tm4} alt="Member 3" class="team-photo"/>
            <h3 class="team-name">Vaibhavi Satange</h3>
            <p class="team-title">Backend</p>
          </div>
          <div class="team-member">
            <img src={tm5} alt="Member 3" class="team-photo"/>
            <h3 class="team-name">Hariharan</h3>
            <p class="team-title">Backend</p>
          </div>
      </div>
      </div>
      <div className="footer">
        <h2>Happy Financing!!!</h2>
        <h3>copyright @FinCare</h3>
      </div>
    </div>
    );
  }
  
  export default Home;