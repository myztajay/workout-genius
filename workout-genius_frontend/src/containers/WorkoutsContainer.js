import React, { Component } from 'react';
import {Card, CardTitle, CardMedia } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './workoutscontainer.css';

class WorkoutsContainer extends Component{
  constructor(props){
    super(props)  
    this.state = {
      workouts: []
    }
  }
  
  componentDidMount(){
    axios.get('/api/workouts')
    .then((res)=>{
      this.setState({
        workouts: res.data
      })
    })
  }
  
  renderWorkouts(){
    return this.state.workouts.map((workout)=>{
      return(
        <Link to={'/workout/' + workout._id} >
          <Card className='card-workout'>
            <CardTitle titleColor="#2979FF"  />
            <CardMedia
              overlay={<CardTitle title={workout.name} subtitle="" />}
            >
            <img className="workout-img" src="workout.jpeg" alt="" />
            </CardMedia>
          </Card>
        </Link>
      )
    })
  }
  
  render(){
    return(
      <MuiThemeProvider>
        <div className="main-container">
          {this.renderWorkouts()}
        </div>
      </MuiThemeProvider>
    )
  }
}


export default WorkoutsContainer