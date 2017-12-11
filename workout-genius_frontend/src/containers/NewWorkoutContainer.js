import React,  { Component } from 'react';
import TextField from 'material-ui/TextField';
import './newworkoutcontainer.css';
import { ExerciseTable } from '../components/ExerciseTable'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Card} from 'material-ui/Card';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import axios from 'axios'


class NewWorkoutContainer extends Component{
  constructor(props){
    super(props)
    this.state ={
      exercises: [],
      exerciseInput: '',
      exerciseSelected: false,
      name: '',
      description: '',
      creator: this.props.user
    }
  }
  
  addExercise(){
    this.setState({
      exercises: [...this.state.exercises, this.state.exerciseInput],
      exerciseInput: ''
    })
  }
  
  handleExerciseInputChange(e){
    this.setState({
      exerciseInput: e.target.value
    })
  }
  handleTitleChange(e){
    this.setState({
      name: e.target.value
    })
  }
  
  handleSubmit(){
    axios.post('/api/workouts', {
      name: this.state.name,
      exercises: this.state.exercises,
      description: this.state.description,
      creator: this.state.creator,
    })
    .then((res)=>{
      console.log(res);
    })
  }
  
  renderRepsAndSets(){
    if(this.state.exerciseSelected) return (
      <div>
      <TextField
        hintText="How man reps"
        floatingLabelText="reps"
        value={this.state.exerciseInput}
        onChange={this.handleExerciseInputChange.bind(this)}
      />
      <TextField
        hintText="How many Sets"
        floatingLabelText="set"
        value={this.state.exerciseInput}
        onChange={this.handleExerciseInputChange.bind(this)}
      />
      </div>
    )
    else return
  }
  
  render(){
    return(
      
      <MuiThemeProvider>
        <div className="main-container">
        <div className="form-container">
        <Card className="card">
        <form className="workout-form">
          <TextField
            hintText="Spartan Ab workout"
            floatingLabelText="Workout Name"
            fullWidth={true}
            onChange={this.handleTitleChange.bind(this)}
          />
          <br />
          <TextField
            hintText="Message Field"
            floatingLabelText="Description"
            fullWidth={true}
            
          />
          <br />
          <TextField
            hintText="Spartan Ab workout"
            floatingLabelText="Exercises"
            value={this.state.exerciseInput}
            onChange={this.handleExerciseInputChange.bind(this)}
          />
          {this.renderRepsAndSets()}
          <FloatingActionButton >
          <ContentAdd onClick={this.addExercise.bind(this)}/>
          </FloatingActionButton>
          <h5>Intesity</h5>
          <br /><Slider step={0.20} value={0.5} />
        </form> 
        </Card>
        </div>
        <div className="workout-container">
        <ExerciseTable exercises={this.state.exercises}/>
        </div>
        <div className="btn-container">
        <RaisedButton label="Primary" primary={true} onClick={this.handleSubmit.bind(this)} />
        </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default NewWorkoutContainer