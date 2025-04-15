/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
==================================================*/
import { Link } from "react-router-dom";

const Credits = (props) => {
  // Destructure props to get credits, addCredit function, and account balance
  const { credits, addCredit, accountBalance } = props;

  const handleAddCredit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    // Get the values from the form fields
    const description = event.target.elements.description.value;
    const amount = parseFloat(event.target.elements.amount.value);

    if (description && !isNaN(amount)) {
      // Create a new credit object with a random ID and current date
      const newCredit = {
        id: Math.floor(Math.random() * 1000), 
        description: description,
        amount: amount,
        date: new Date().toISOString(), // Store current date in ISO format
      };

      // Call the addCredit function from props to update state with the new credit
      addCredit(newCredit);

      // Reset form fields after adding the credit
      event.target.reset();
    }
  };

  const renderCredits = () => {
    // Map through the credits array and create a table row for each credit
    return credits.map((credit) => {
      const formattedDate = new Date(credit.date).toLocaleDateString();
      // Format the date to a more readable format
      return (
        <tr key={credit.id}>
          <td>{credit.description}</td>
          <td>${credit.amount.toFixed(2)}</td>
          <td>{formattedDate}</td>
        </tr>
      );
    });
  };

  const creditAmount = credits.reduce(
    (total, credit) => total + credit.amount,
    0
  ); // calculate credit amount in total

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>Credits</h1>
      <p>Note, in order to add credit you must have a number for the amount input field & a good description describing the reasoning for adding this credit! If you do not adhere to this than the 'AddCredit' button simply will not function!</p>
      <p style={{ textAlign: "center", fontSize: "18px" }}>

        <strong>Account Balance:</strong> ${accountBalance.toFixed(2)}
        <br></br>
        <strong>Current Credit: </strong> ${creditAmount.toFixed(2)}
      </p>


      {/*Implement a basic table in react to store the values  */}
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
        <tbody>{renderCredits()}</tbody>
      </table>

      {/* The tyle below is  */}
      <form
        onSubmit={handleAddCredit}
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
        {/*Add credit button  */}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Credit
        </button>
      </form>

      <br />
      <Link
        to="/"
        style={{
          display: "block",
          textAlign: "center",
          marginTop: "20px",
          textDecoration: "none",
          color: "#4CAF50",
          fontWeight: "bold",
        }}
      >
        Return to Home
      </Link>
    </div>
  );
};

export default Credits;