const db = require('../models');

exports.updateUser = (req, res)=>{
  db.User.findOneAndUpdate({_id: req.params.user},  req.body, {new: true})
  .then((updatedUser)=>{  
    res.json(updatedUser)
  })
  .catch((err)=>{
    res.send(err)
  })
}