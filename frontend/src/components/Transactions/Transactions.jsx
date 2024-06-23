import React from 'react'
import './Transactions.css'

const Transactions = () => {
  
   const tableData = [
    { col1: '05-06-2024', col2: 'Phone Bill', col3: 'Rs 1000', col4: 'Utilities', col5: 'late payment' },
    { col1: '15-06-2024', col2: 'Electricity Bill', col3: 'Rs 4000', col4: 'Utilities', col5: 'split with John' },
    { col1: '28-06-2024', col2: 'Water Bill', col3: 'Rs 1500', col4: 'Utilities', col5: 'timely payment' },
    // Add more rows as needed
  ];

  return (
    <div className='table-container'>
       <table className='responsive-table'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Comments</th>
          <th>Operations</th>

        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.col1}</td>
            <td>{row.col2}</td>
            <td>{row.col3}</td>
            <td>{row.col4}</td>
            <td>{row.col5}</td>
          </tr>
        ))}
      </tbody>
    </table>
      
    </div>
  )
}

export default Transactions