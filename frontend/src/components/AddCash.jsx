import React, { useState } from "react";
import axios from "axios";
import "./AddCash.css"; 

function AddCash({ balance, updateBalance }) {
  const [source, setSource] = useState("");
  const [sum, setSum] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { source, sum: parseFloat(sum), date };

    axios
      .post("http://localhost:8080/api/v1/addCash", newTransaction)
      .then((response) => {
        console.log("Cash added successfully:", response.data);
        updateBalance(balance + parseFloat(sum));
        setSource("");
        setSum("");
        setDate("");
      })
      .catch((error) => {
        console.error("There was an error adding cash!", error);
        setError(
          "There was an error adding cash. Please try again later."
        );
      });
  };

  return (
    <div className="add-cash-container">
      <div className="card balance">
        <h3>Balance</h3>
        <p>EUR {balance}</p>
      </div>
      <div className="add-cash">
        <h3>Add Cash</h3>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Source</label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
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
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddCash;

