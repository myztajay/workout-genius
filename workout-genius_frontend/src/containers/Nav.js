import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
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
  constructor(props) {
  super(props);
  this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open})
  
  render(){
    return(
      <MuiThemeProvider>
        <AppBar
        className='navbar'
        title={<span >Workout genius</span>}
        iconElementRight={<MyNavLinks />}
        onClick={this.handleToggle}
        >
        </AppBar>
        <Drawer 
          open={this.state.open}
          containerStyle={{backgroundColor:'#ecf0f1',}}
        >
          <NavLink to="/"><MenuItem>Home</MenuItem></NavLink>
          <NavLink to="/workouts"><MenuItem>Workouts</MenuItem></NavLink>
          <MenuItem>Menu Item 2</MenuItem>
       </Drawer>
      </MuiThemeProvider>
    )
  }
}

export default Nav

