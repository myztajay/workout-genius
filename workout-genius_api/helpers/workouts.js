const db = require('../models');

exports.getWorkouts = (req,res)=>{
  db.Workout.find()
  .then((todos)=>{
    res.json(todos)
  })
  .catch(()=>{
    res.send(err)
  })
}

exports.createWorkout  = (req,res)=>{
  db.Workout.create(req.body)
  .then((newWorkout)=>{
    res.status(201).json(newWorkout)
  })
  .catch((err)=>{
    res.send(err)
  })
}

exports.showWorkout = (req, res)=>{
  db.Workout.findById(req.params.todoId)
  .then((foundWorkout)=>{
    res.json(foundWorkout)
  })
  .catch((err)=>{
    res.send(err)
  })
}


exports.updateWorkout = (req, res)=>{
  db.Workout.findOneAndUpdate({_id: req.params.todoId},  req.body, {new: true})
  .then((updatedWorkout)=>{
    res.json(updatedWorkout)
  })
  .catch((err)=>{
    res.send(err)
  })
}

exports.deleteWorkout = (req, res)=>{
 db.Workout.remove({_id: req.params.todoId})
 .then(()=>{
   res.send('deleted')
 })
 .catch((err)=>{
   res.send(err)
 })
}