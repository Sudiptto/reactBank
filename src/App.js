/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';
import axios from 'axios'; // Import axios for API requests


class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 0,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  // lifecycle method should include API requests 
componentDidMount() {
  // Fetch credits and debits data from the API and update the state
  axios.get('https://johnnylaicode.github.io/api/credits.json')
    .then(response => {
      const creditList = response.data;
      // response.data is an array of credit objects
      // Calculate the total credit amount and update the state
      const creditAmount = creditList.reduce((total, credit) => total + credit.amount, 0);
      this.setState({ creditList, accountBalance: this.state.accountBalance + creditAmount });
    })
    .catch(error => console.error('Error fetching credits:', error));

   // Fetch debits data from the API and update the state 
  axios.get('https://johnnylaicode.github.io/api/debits.json')
    .then(response => {
      // response.data is an array of debit objects
      const debitList = response.data;

      const debitAmount = debitList.reduce((total, debit) => total + debit.amount, 0);
      // Update the state with the fetched data and adjust account balance
      // by subtracting the total debit amount
      this.setState({ debitList, accountBalance: this.state.accountBalance - debitAmount });
    })
    .catch(error => console.error('Error fetching debits:', error));
}

  // addCredit and addDebit that update the state based on user input of new credits and debits

  addCredit = (newCredit) => {
    // Add the new credit to the creditList and update account balance
    const { creditList } = this.state;
    // updateCreditList is a new array that includes the new credit
    const updateCreditList = [...creditList, newCredit];
    // Update the state with the new credit and adjust account balance
    this.setState(prevState => ({
      creditList: updateCreditList,
      accountBalance: prevState.accountBalance + newCredit.amount,
    }));
  }

  // addDebit that updates the state based on user input of new debits
  addDebit = (newDebit) => {
    // Add the new debit to the debitList and update account balance
    const { debitList } = this.state;
    // updateDebitList is a new array that includes the new debit
    const updateDebitList = [...debitList, newDebit];
    // Update the state with the new debit and adjust account balance
    this.setState(prevState => ({
      debitList: updateDebitList,
      accountBalance: prevState.accountBalance - newDebit.amount,
    }));
  }



  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} accountBalance={this.state.accountBalance} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (<Credits credits={this.state.creditList} addCredit={this.addCredit} accountBalance={this.state.accountBalance} />) 
    const DebitsComponent = () => (<Debits debits={this.state.debitList} addDebit={this.addDebit} accountBalance={this.state.accountBalance} />) 

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/reactBank">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;