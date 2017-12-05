import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false,
      user: {}
    }
  }
  
  componentDidMount(){
    axios.get('api/auth/userauth')
    .then((res)=>{
      this.setState({user: res.data, loggedIn: true})    
    })
    .catch((err)=>{console.log(err);})
  }
  
  logInWithFacebook(){
    window.location.href = 'api/auth/facebook' 
    // do a call to backed and fire off LOGIN
    // return loggedin user ID from local database
  }
  signUpWithFacebook(){
    window.location.href = 'api/auth/facebook' 
    // do a call to backed and fire off SIGNUP
    // return loggedin user ID from local database
  }
  
  render() {
    return (
      <Login 
      loggedIn={this.state.loggedIn} 
      logInWithFacebook={this.logInWithFacebook.bind(this)}
      signUpWithFacebook={this.signUpWithFacebook.bind()}
      />
    );
  }
}

export default App;
