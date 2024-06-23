import React from 'react';
import './Home.css';
import Profile from '../../components/profile/profile';
import Transactions from '../../components/Transactions/Transactions';
import CreateTransaction from '../../components/createTransaction/createTransaction';

function Home({ selectedContent }) {
  return (
    <div className='home'>
      home
      {selectedContent === "profile" && <Profile />}
      {selectedContent === "prevTransactions" && <Transactions />}
      {selectedContent === "createTransaction" && <CreateTransaction />}
    </div>
  );
}

export default Home;