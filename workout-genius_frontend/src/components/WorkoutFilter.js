import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';

export const WorkoutFilter = ({name, abrev, onFilterToggle})=> {
  
  return(
    <Chip
      value={0}
      style={{margin: "10px"}}
      backgroundColor={blue300}
      onClick={() => onFilterToggle(name)}
     >
      <Avatar size={32} color={blue300} backgroundColor={indigo900}>
       {abrev}
      </Avatar>
      {name}
    </Chip>
  )
}