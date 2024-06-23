// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Dashboard.css';

// function Dashboard() {
//     const [balance, setBalance] = useState(0);
//     const [shopping, setShopping] = useState(0);
//     const [food, setFood] = useState(0);
//     const [bills, setBills] = useState(0);
//     const [others, setOthers] = useState(0);
//     const [transactions, setTransactions] = useState([]);

//     useEffect(() => {
//         // Fetch data from the API and set the state
//         axios.get("http://localhost:8085/api/v1/transactions")
//             .then(response => {
//                 const data = response.data;
//                 setBalance(data.balance);
//                 setShopping(data.shopping);
//                 setFood(data.food);
//                 setBills(data.bills);
//                 setOthers(data.others);
//                 setTransactions(data.transactions);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the data!", error);
//             });
//     }, []);

//     return (
//         <div className="dashboard-container">
//             <div className="sidebar">
//                 <div className="user-info">
//                     <img src="user-avatar-url" alt="User Avatar" className="avatar" />
//                     <p>Hello, Soeid</p>
//                 </div>
//                 <nav>
//                     <ul>
//                         <li><a href="#"><i className="fas fa-chart-bar"></i><span>Dashboard</span></a></li>
//                         <li><a href="#"><i className="fas fa-coins"></i><span>Add Cash</span></a></li>
//                         <li><a href="#"><i className="fas fa-cog"></i><span>Settings</span></a></li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className="main-content">

//                 <div className="top-cards">
//                     <div className="card balance">
//                         <h3>Balance</h3>
//                         <p>EUR {balance}</p>
//                     </div>
//                     <div className="card shopping">
//                         <h3>Shopping</h3>
//                         <p>EUR {shopping}</p>
//                     </div>
//                     <div className="card food">
//                         <h3>Food & Drinks</h3>
//                         <p>EUR {food}</p>
//                     </div>
//                     <div className="card bills">
//                         <h3>Bills & Utilities</h3>
//                         <p>EUR {bills}</p>
//                     </div>
//                     <div className="card others">
//                         <h3>Others</h3>
//                         <p>EUR {others}</p>
//                     </div>
//                 </div>
//                 <div className="add-expenditure">
//                     <h3>Add Expenditure</h3>
//                     <form>
//                         <div>
//                             <label>Purpose</label>
//                             <input type="text" />
//                         </div>
//                         <div>
//                             <label>Sum</label>
//                             <input type="number" />
//                         </div>
//                         <div>
//                             <label>Date</label>
//                             <input type="date" />
//                         </div>
//                         <div>
//                             <label>Category</label>
//                             <select>
//                                 <option>Shopping</option>
//                                 <option>Food & Drink</option>
//                                 <option>Bills & Utilities</option>
//                                 <option>Others</option>
//                             </select>
//                         </div>
//                         <button type="submit">Add</button>
//                     </form>
//                 </div>
//                 <div className="transactions">
//                     <h3>Recent Transactions</h3>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Purpose</th>
//                                 <th>Category</th>
//                                 <th>Sum</th>
//                                 <th>Date</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {transactions.map((transaction, index) => (
//                                 <tr key={index}>
//                                     <td>{transaction.purpose}</td>
//                                     <td>{transaction.category}</td>
//                                     <td>{transaction.sum}</td>
//                                     <td>{transaction.date}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [shopping, setShopping] = useState(0);
  const [food, setFood] = useState(0);
  const [bills, setBills] = useState(0);
  const [others, setOthers] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [purpose, setPurpose] = useState("");
  const [sum, setSum] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Shopping");
  useEffect(() => {
    console.log("Fetching data from API...");
    axios
      .get("http://localhost:8080/api/v1/transactions")
      .then((response) => {
        const data = response.data;
        console.log("Data fetched successfully:", data);
        setBalance(data.balance);
        setShopping(data.shopping);
        setFood(data.food);
        setBills(data.bills);
        setOthers(data.others);
        setTransactions(data.transactions);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setError(
          "There was an error fetching the data. Please try again later."
        );
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { purpose, sum: parseFloat(sum), date, category };
    axios
      .post("http://localhost:8080/api/v1/transactions", newTransaction)
      .then((response) => {
        console.log("Transaction added successfully:", response.data);
        setTransactions([...transactions, response.data]);
        setBalance(balance - parseFloat(sum)); // Assuming balance reduces by sum
        // Update the respective category
        switch (category) {
          case "Shopping":
            setShopping(shopping + parseFloat(sum));
            break;
          case "Food & Drink":
            setFood(food + parseFloat(sum));
            break;
          case "Bills & Utilities":
            setBills(bills + parseFloat(sum));
            break;
          case "Others":
            setOthers(others + parseFloat(sum));
            break;
          default:
            break;
        }
        // Clear form fields
        setPurpose("");
        setSum("");
        setDate("");
        setCategory("Shopping");
      })
      .catch((error) => {
        console.error("There was an error saving the transaction!", error);
        setError(
          "There was an error saving the transaction. Please try again later."
        );
      });
  };
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="user-info">
          <img src="user-avatar-url" alt="User Avatar" className="avatar" />
          <p>Hello, Soeid</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">
                <i
                  className="fas
fa-chart-bar"
                ></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fas
fa-coins"
                ></i>
                <span>Add Cash</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fas
fa-cog"
                ></i>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        {error && <div className="error">{error}</div>}
        <div className="top-cards">
          <div className="card balance">
            <h3>Balance</h3>
            <p>EUR {balance}</p>
          </div>
          <div className="card shopping">
            <h3>Shopping</h3>
            <p>EUR {shopping}</p>
          </div>
          <div className="card food">
            <h3>Food & Drinks</h3>
            <p>EUR {food}</p>
          </div>
          <div className="card bills">
            <h3>Bills & Utilities</h3>
            <p>EUR {bills}</p>
          </div>
          <div className="card others">
            <h3>Others</h3>
            <p>EUR {others}</p>
          </div>
        </div>
        <div className="add-expenditure">
          <h3>Add Expenditure</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Purpose</label>
              <input
                type="text"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Sum</label>
              <input
                type="number"
                value={sum}
                onChange={(e) => setSum(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Shopping</option>
                <option>Food & Drink</option>
                <option>Bills & Utilities</option>
                <option>Others</option>
              </select>
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="transactions">
          <h3>Recent Transactions</h3>
          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Category</th>
                <th>Sum</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.purpose}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.sum}</td>
                  <td>{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
