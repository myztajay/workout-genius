import React, { Component } from 'react';
import {Card, CardTitle, CardMedia } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import { WorkoutFilter } from '../components/WorkoutFilter';
import axios from 'axios'
import './workoutscontainer.css';

class WorkoutsContainer extends Component{
  constructor(props){
    super(props)  
    this.state = {
      workouts: [],
      filterArr: []
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
  
  onFilterToggle(type){
    if(this.state.filterArr.length === 0){
      this.setState({
          filterArr: [type]
      })
    }
    let newArr = this.state.filterArr.filter((workoutType)=>{
      if(workoutType != type){
        return true
      }
      this.setState({
          filterArr: [...this.state.filterArr, ...newArr]
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
            <div className="card-info">
              <div className="info"><h4>Exercise</h4><br /><p className="card-text">{workout.exercises.length}</p></div>
              <div className="info"><h4>Intensity</h4><br /><p className="card-text">{workout.intensity}</p></div>
              <div className="info"><h4>likes</h4><br /><p className="card-text">20</p></div>
            </div>
            <Divider />
            <div className='user-info'><img className='profile-img' src={`${workout.creator[0].facebook_photo}`} /><p>{workout.creator[0].display_name}</p></div>
            
          </Card>
        </Link>
      )
    })
  }
  
  render(){
    return(
      <MuiThemeProvider>
      <div className="filter-div">
        <WorkoutFilter name="Crossfit" abrev="CF" onFilterToggle={this.onFilterToggle.bind(this)} /> 
        <WorkoutFilter name="Hybrid" abrev="H" onFilterToggle={this.onFilterToggle.bind(this)}  /> 
        <WorkoutFilter name="BodyBuilding" abrev="BB" onFilterToggle={this.onFilterToggle.bind(this)} /> 
        <WorkoutFilter name="Calisthetics" abrev="CS" onFilterToggle={this.onFilterToggle.bind(this)} /> 
        <WorkoutFilter name="Cardio" abrev="CO" onFilterToggle={this.onFilterToggle.bind(this)} /> 
      </div>
        <div className="main-container">            
          {this.renderWorkouts()}
        </div>
      </MuiThemeProvider>
    )
  }
}


export default WorkoutsContainer