import React from 'react'
import './profile.css'
import Transactions from '../Transactions/Transactions'

const Profile = () => {
  return (
    <div className='profile'>
        <div className='container'>
          <div className='total-income-container box'>
            <p>Total Income</p>
            <p>Rs. 56000</p>
          </div>
          <div className='expenses-container box'>
            <p>Expenses</p>
            <p>Rs. 12000</p>
          </div>
          <div className='current-balance-container box'>
            <p>Current Balance</p>
            <p>Rs. 44000</p>
          </div> 
        </div>
        <div>
          <span>Your Transaction History</span>
          <Transactions/>
        </div>
    </div>
  )
}

export default Profile