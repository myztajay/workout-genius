import React, { Component } from 'react'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './landing.css'

class LandingContainer extends Component{
  logInWithFacebook(){
    window.location.href = '/api/auth/facebook' 
  }
  signUpWithFacebook(){
    window.location.href = '/api/auth/facebook' 
  }
  render(){
    return(
      <header>
      <div id="stripes"></div>
      <section className='intro'>
      <div className="intro-card">
      <MuiThemeProvider>
      <Card>
        <CardTitle title="Workout Genius" subtitle="Workout Genius" />
        <CardText>
          Find thousand of workouts created by people like you 
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>          
          <FlatButton label="Action1" onClick={this.signUpWithFacebook} />
          
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
      </MuiThemeProvider>
      </div>
      </section>
      </header>
      
    )
  }
}

export default LandingContainer

