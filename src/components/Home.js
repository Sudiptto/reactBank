/*==================================================
src/components/Home.js

The Home component is used to demonstrate the use of Link.
==================================================*/
import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
        {/* Header Section */}
        <header style={{ backgroundColor: '#2C3E50', color: 'white', padding: '20px 0' }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Bank of React</h1>
        </header>

        {/* Hero Image */}
        <img
          src="https://images.mktw.net/im-739712/social"
          alt="bank"
          style={{
            margin: '20px 0',
            borderRadius: '15px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
          }}
        />

        {/* Welcome Message */}
        <p style={{ fontSize: '20px', color: '#34495E', marginBottom: '30px' }}>
          Welcome to the Bank of React! Please use our buttons below!.
        </p>

        {/* Account Balance */}
        <AccountBalance accountBalance={this.props.accountBalance} />

        {/* Navigation Buttons */}
        <div style={{ marginTop: '40px' }}>
          {/*Navigation Links -> User Profile */}
          <Link
            to="/userProfile"
            style={{
              display: 'inline-block',
              margin: '10px',
              padding: '12px 25px',
              backgroundColor: '#3498DB',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2980B9')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3498DB')}
          >
            User Profile
          </Link>
          {/* This Link ->  */}
          <Link
            to="/login"
            style={{
              display: 'inline-block',
              margin: '10px',
              padding: '12px 25px',
              backgroundColor: '#3498DB',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2980B9')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3498DB')}
          >
            Login
          </Link>
          {/*Styling for the credit */}
          <Link
            to="/credits"
            style={{
              display: 'inline-block',
              margin: '10px',
              padding: '12px 25px',
              backgroundColor: '#3498DB',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2980B9')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3498DB')}
          >
            Credits
          </Link>
          {/*Styling for the debit */}
          <Link
            to="/debits"
            style={{
              display: 'inline-block',
              margin: '10px',
              padding: '12px 25px',
              backgroundColor: '#3498DB',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2980B9')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3498DB')}
          >
            Debits
          </Link>
        </div>

        {/* Footer Section */}
        <footer style={{ marginTop: '50px', color: '#95A5A6', fontSize: '14px' }}>
          © 2025 Bank of React; All rights reserved.
        </footer>
      </div>
    );
  }
}

export default Home;