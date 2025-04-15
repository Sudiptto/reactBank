/*==================================================
src/components/UserProfile.js

The UserProfile component displays user information in a modern and visually appealing layout.
==================================================*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (

      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          maxWidth: '600px',
          margin: '50px auto',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          backgroundColor: '#f9f9f9',
        }}
      >
        {/* Header Section */}
        {/* Green color for a friendly tone */} 
        <h1
          style={{
            textAlign: 'center',
            color: '#4CAF50', 
            marginBottom: '20px',
          }}
        >
          User Profile
        </h1>

        {/* User Information */}
        <div
          style={{
            fontSize: '18px',
            color: '#333', // Darker text for readability
            lineHeight: '1.6',
          }}
        >
          <p>
            <strong>Username:</strong> {this.props.userName}
          </p>
          <p>
            <strong>Member Since:</strong> {this.props.memberSince}
          </p>
          {/*Added the account balance */}
          <p>
            <strong>Account Balance:</strong> ${this.props.accountBalance.toFixed(2)}
          </p>
        </div>

        {/* Return to Home Button */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          {/*GREEN BUTTON TO GO BACK HOME */}
          <Link
            to="/"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#4CAF50', 
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Button shadow for depth
              transition: 'background-color 0.3s ease', // Smooth hover effect
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#45A049')} 
            onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
}

export default UserProfile;