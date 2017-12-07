import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import axios from 'axios'

const Test = () => (
  <h1> hello from test</h1>
)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false,
      user: {},
      workout: []
    }
  }
  
  componentDidMount(){
    axios.get('/api/auth/userauth')
    .then((res)=>{
      this.setState({user: res.data, loggedIn: true})    
    })
    .catch((err)=>{console.log(err);})
    
    axios.get('/api/workouts')
    .then((res)=>{
      this.setState({workout: res.data})    
    })
    .catch((err)=>{console.log(err);})
  }
  
  logInWithFacebook(){
    window.location.href = '/api/auth/facebook' 
    // do a call to backed and fire off LOGIN
    // return loggedin user ID from local database
  }
  signUpWithFacebook(){
    window.location.href = '/api/auth/facebook' 
    // do a call to backed and fire off SIGNUP
    // return loggedin user ID from local database
  }
  
  render() {
    return (
      <BrowserRouter>
        <div>
        <Switch>
        { !this.state.user 
        ?
        <Route exact path='/' render={()=>(<Login 
          loggedIn={this.state.loggedIn} 
          user={this.state.user} 
          logInWithFacebook={this.logInWithFacebook.bind(this)} 
          signUpWithFacebook={this.signUpWithFacebook.bind(this)}
        />)
        } 
        />
        : 
        <Route exact path='/' component={Test} />
        
        }
        </Switch>
        </div>
      </BrowserRouter>
    
    );
  }
}

export default App;
