import React, { Component } from 'react';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header'
import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import User from 'grommet/components/icons/base/User';
import { NavLink } from 'react-router-dom';

class Nav extends Component{
  render(){
    return(
      <Sidebar colorIndex='neutral-4'>
        <Header pad='medium'
          justify='between'>
          <Title>
            Workout Genius
          </Title>
        </Header>
        <Box flex='grow'
          justify='start'>
          <Menu primary={true}>
            <NavLink
            to="/Home"
            activeClassName="selected">
              Home
            </NavLink>
            <NavLink
            to="/Workouts"
            activeClassName="selected">
              Workouts
            </NavLink>
            <NavLink
            to="/FAQ"
            activeClassName="selected">
              FAQ
            </NavLink>
            <NavLink
            to="/about"
            activeClassName="selected">
             About
            </NavLink>
          </Menu>
        </Box>
        <Footer pad='medium'>
          <Button icon={<User />} />
        </Footer>
      </Sidebar>
    )
  }
}

export default Nav

