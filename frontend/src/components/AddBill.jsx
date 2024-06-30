import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddBill.css";

function AddBill() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [bills, setBills] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/bills")
      .then((response) => {
        setBills(response.data);
      })
      .catch((error) => {
        setError("There was an error fetching the bills. Please try again later.");
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("date", date);
    formData.append("title", title);
    formData.append("file", file);

    axios
      .post("http://localhost:8080/api/v1/bills", formData)
      .then((response) => {
        setBills([...bills, response.data]);
        setDate("");
        setTitle("");
        setFile(null);
      })
      .catch((error) => {
        setError("There was an error adding the bill. Please try again later.");
      });
  };

  return (
    <div className="add-bill-container">
      <div className="add-bill">
        <h3>Add Bill</h3>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
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
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>File</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>
          <button type="submit">Add Bill</button>
        </form>
      </div>
      <div className="bills-table">
        <h3>Recent Bills</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, index) => (
              <tr key={index}>
                <td>{bill.date}</td>
                <td>{bill.title}</td>
                <td><a href={bill.fileUrl} target="_blank" rel="noopener noreferrer">View File</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddBill;
