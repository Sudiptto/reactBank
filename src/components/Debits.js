import React from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance"; // Shared component to show the current balance

const Debits = (props) => {
  const { debits, addDebit, accountBalance } = props;

  // Handle form submission for adding a new debit
  const handleAddDebit = (event) => {
    event.preventDefault();
    const description = event.target.elements.description.value;
    const amount = parseFloat(event.target.elements.amount.value);

    if (description && !isNaN(amount)) {
      const newDebit = {
        id: Math.floor(Math.random() * 1000), // Random ID for simplicity (would use UUIDs in production)
        description: description,
        amount: amount,
        date: new Date().toISOString(), // Save the exact time of the transaction
      };

      // Call parent-provided function to update debit list
      addDebit(newDebit); 
      // Clear the form fields
      event.target.reset(); 
    }
  };

  // Dynamically generate table rows for each debit entry
  const renderDebits = () => {
    return debits.map((debit) => {
      // Format ISO string to readable date
      const formattedDate = new Date(debit.date).toLocaleDateString(); 
      return (
        // Use a unique key for each row to help React identify which items have changed
        <tr key={debit.id}>
          <td>{debit.description}</td>
          <td>${debit.amount.toFixed(2)}</td>
          <td>{formattedDate}</td>
        </tr>
      );
    });
  };

  // Sum all debit values to optionally show total debits
  const debitTotal = debits.reduce((total, debit) => total + debit.amount, 0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#f44336" }}>Debits</h1>

      {/* Always show account balance at the top for clarity */}
      <p style={{ textAlign: "center", fontSize: "18px" }}>
        <strong>Account Balance:</strong> ${accountBalance.toFixed(2)}
        <br></br>
        <strong>Current Debit: </strong>$-{debitTotal.toFixed(2)}
      </p>

      {/* Table structure for listing debit transactions */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Description
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Amount</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Date</th>
          </tr>
        </thead>
        <tbody>{renderDebits()}</tbody>
      </table>

      {/* Form to input new debit transactions */}
      <form
        onSubmit={handleAddDebit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="description"
          placeholder="Description"
          style={{
            padding: "10px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          style={{
            padding: "10px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Debit
        </button>
      </form>

      <br />

      {/* Navigation link to go back to the homepage */}
      <Link
        to="/"
        style={{
          display: "block",
          textAlign: "center",
          marginTop: "20px",
          textDecoration: "none",
          color: "#f44336",
          fontWeight: "bold",
        }}
      >
        Return to Home
      </Link>
    </div>
  );
};

export default Debits;
