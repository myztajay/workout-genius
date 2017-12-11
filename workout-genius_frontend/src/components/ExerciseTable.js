import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import './exercisetable.css'

function renderExercises(exercises){
  // takes in exercises as a prop and makes table entry for each
  return exercises.map((exercise, i )=>{
    return (
      <TableRow>
        <TableRowColumn key={i}>{exercise}</TableRowColumn>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>2</TableRowColumn>
      </TableRow>
    )
  })
}

const customColumnStyle = { width: '20%'};
export const ExerciseTable = ({exercises}) => (
  <Table fixedHeader={false} style={{ tableLayout: 'auto' }} className='exercise-table'>
  <TableHeader>
    <TableRow>
      <TableHeaderColumn style={customColumnStyle}>Exercise</TableHeaderColumn>
      <TableHeaderColumn style={customColumnStyle}>Reps</TableHeaderColumn>
      <TableHeaderColumn style={customColumnStyle}>Sets</TableHeaderColumn>
    </TableRow>
  </TableHeader>
    <TableBody>
      {renderExercises(exercises)}
    </TableBody>
  </Table>
)


