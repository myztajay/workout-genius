import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { ToolbarGroup } from 'material-ui/Toolbar';
import './nav.css'
import FlatButton from 'material-ui/FlatButton'


const MyNavLinks = () => (
  <ToolbarGroup>
    <FlatButton label="Workouts" labelStyle={{color: 'white'}}   containerElement={<NavLink to="/workouts"/>}/>
    <FlatButton label="Settings" labelStyle={{color: 'white'}}  containerElement={<NavLink to="/settings" />}/>
    <FlatButton label="myworkouts" labelStyle={{color: 'white'}} containerElement={<NavLink to="/myworkouts" />}/>
    <FlatButton label="Create" labelStyle={{color: 'white', backgroundColor:'#2979FF', padding: '10px'}} containerElement={<NavLink to="/workouts/new" />}/>
  </ToolbarGroup> 
);

class Nav extends Component{
  render(){
    return(
      <MuiThemeProvider>
        <AppBar
        className='navbar'
        title={<span >Workout genius</span>}
        iconElementRight={<MyNavLinks />}
        >
        </AppBar>
      </MuiThemeProvider>
    )
  }
}

export default Nav

