import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import axios from 'axios'
import Split from 'grommet/components/Split';
import Nav from './components/Nav'
import Landing from './components/Landing'
import '../node_modules/grommet-css';
import Feed from './components/Feed'


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
  

  
  render() {
    return (
      <BrowserRouter>
        
        <Switch>
        { !this.state.loggedIn 
        ?
        <Route exact path='/' component={Landing} />
        :
        <div> 
        <Nav />
        <Route exact path='/' component={Feed} />
        </div>
        }
        </Switch>
      </BrowserRouter>
    
    );
  }
}

export default App;
