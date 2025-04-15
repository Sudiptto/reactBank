/*==================================================
src/components/Login.js

The LogIn component displays a modern and visually appealing login form.
==================================================*/
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LogIn extends Component {
  // Constructor initializes state with user information and redirect property
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: this.props.user.userName, 
        password: '',
      },
      // Redirect property used to trigger Redirect
      redirect: false, 
    };
  }

  // Handle input changes and update state
  handleChange = (e) => {
    // Update the user object in state based on input field changes
    const updatedUser = { ...this.state.user };
    updatedUser.userName = e.target.value;
    this.setState({ user: updatedUser });
  };

  // Handle form submission and redirect to User Profile
  handleSubmit = (e) => {
    e.preventDefault();
    // Update state 
    this.props.mockLogIn(this.state.user); 
    this.setState({ redirect: true }); 
  };

  render() {
    // Redirect to "User Profile" page when "Log In" button is clicked -> to userProfile -> can re=direct open
    if (this.state.redirect) {
      return <Redirect to="/userProfile" />;
    }

    // Render the login form
    return (
      // Main container for the login form -> the style is applied to the div element
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          maxWidth: '400px',
          margin: '50px auto',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          backgroundColor: '#f9f9f9', 
        }}
      >
        {/* Header Section for Login */}
        <h1
          style={{
            textAlign: 'center',
            color: '#3498DB', 
            marginBottom: '20px',
          }}
        >
          Log In
        </h1>

        {/* Login Form */}
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            {/* User Name Input Field */}
            <label
              style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: 'bold',
                color: '#333', 
              }}
            >
              User Name
            </label>
            {/* Input field for user name */}
            <input
              type="text"
              name="userName"
              defaultValue={this.props.user.userName}
              onChange={this.handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </div>
          {/* Password Input Field */}
          <div style={{ marginBottom: '15px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: 'bold',
                color: '#333',
              }}
            >
              Password
            </label>
            {/* Input field for password */}
            <input
              type="password"
              name="password"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </div>
          {/* Log In Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#3498DB', // Blue button for consistency
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease', 
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2980B9')} // Darker blue on hover
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3498DB')}
          >
            Log In
          </button>
        </form>

        {/* Return to Home Link */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          {/* Link to navigate back to the home page */}
          <Link
            to="/"
            style={{
              color: '#3498DB',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
}

export default LogIn;