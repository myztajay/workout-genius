import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import './FeedContainer.css';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';


class FeedContainer extends Component{
  render(){
    return(
      <MuiThemeProvider>
      <div className='main-container'>
        <Link to='/workouts'>
          <Card className='card-actions'>
            <CardTitle titleColor="#2979FF" title="Browse Workouts" subtitle="Thousand of workouts made by people like you #homebrew" />
            <div className="icon-container">
              <i class="material-icons">fitness_center</i>
            </div>
          </Card>
        </Link>
        <Link to='/workouts/new'>
        <Card className='card-actions'>
          <CardTitle titleColor="#2979FF" title="Create a workout" subtitle="Got a killer workout? Share it with the world." />
          <div className="icon-container">
            <i class="material-icons">add_circle</i>
          </div>
        </Card>
        </Link>
        <Link to='/settings'>
        <Card className='card-actions'>
          <CardTitle titleColor="#2979FF" title="Profile" subtitle="Change your profile and show everyone the new you" />
          <div className="icon-container">
            <i class="material-icons">person</i>
          </div>
        </Card>
        </Link>
      </div>
      </MuiThemeProvider>
    )
  }
}

export default FeedContainer