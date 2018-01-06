import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle, CardText} from 'material-ui/Card';
import './workoutcontainer.css'
import axios from 'axios';

class WorkoutContainer extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      id: props.match.params.workout,
      name: '',
      description: '', 
      exercises: []
    }
  }
  
  componentWillMount(){
    axios.get(`/api/workouts/${this.state.id}`)
      .then((res)=>{
        const { name, description, exercises } = res.data
        this.setState({
          name,
          description,
          exercises
        })
    });
  }
  
  renderExercisesInWorkout(){
    return this.state.exercises.map((exercise)=>{
      // THE JSX return should be refactored into own component when finalized
      return(
        <Card className="card-margin ">
          <CardText className="flex-flexible"><h1>sdfsdfsdfsdf</h1></CardText>
          <div className="column-container flex-flexible">
            <CardTitle title={exercise.name} />
            <CardTitle subtitle={exercise.description}/>
          </div>
          <div className='flex-row flex-flexible'>
            <div className="circle flex-center text-white text-center">reps<br />{exercise.reps}</div>
            <div className="circle flex-center text-white text-center">sets<br />{exercise.sets}</div>
          </div>
        </Card>
      )
    })
  }

  render(){
    return(
      <MuiThemeProvider> 
        <div className="main-container">
            <Card className="column-container main-width">
              <div className="flex-row flex-center">
                <div className="column-container title-desc">
                  <CardTitle  title={this.state.name} subtitle={`${this.state.description}`} />
                  <h1>Stars</h1>
                </div>
                  <h1>GUAGE</h1>
                </div>
              {this.renderExercisesInWorkout()}        
            </Card>
        </div>
      </MuiThemeProvider> 
    )
  }
}
export default WorkoutContainer;