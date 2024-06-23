import React from 'react';
import './Home.css';
import Profile from '../../components/profile/profile';
import Transactions from '../../components/Transactions/Transactions';
import CreateTransaction from '../../components/createTransaction/createTransaction';

function Home({ selectedContent }) {

   const homeDefault = () => {
    if (!selectedContent) {
      return (
        <div className='content'>
          <h1>Welcome to Personal Finance Manager</h1>
          <h2>Take control of your finances!</h2>
          <p>Easily track expenses and manage income — all in one secure and intuitive platform. </p>
          <p>Start your journey to financial freedom today!</p>
          <p></p>
        </div>
      );
    }
    return null;
  };


  return (
    <div className='home'>
      {homeDefault()}
      {selectedContent === "profile" && <Profile />}
      {selectedContent === "prevTransactions" && <Transactions />}
      {selectedContent === "createTransaction" && <CreateTransaction />}
    </div>
  );
}

export default Home;