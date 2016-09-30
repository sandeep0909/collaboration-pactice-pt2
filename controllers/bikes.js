var
  Bike = require('../models/Bike.js')

module.exports = {
  index: function(req, res){
    Bike.find({}, function(err, bikes){
      res.json(bikes)
    })
  },
  show: function(req, res){
    Bike.findById(req.params.id, function(err, bike){
      res.json(bike)
    })
  },
  new: function(req, res){
  //  no view yet
  },
  create: function(req, res){
    Bike.create(req.body, function(err, bike)}{
      if (err){
        res.json({message: "Bike was not created"})
      } else {
        res.json({message: "Bike was created!", bike: bike})
      }
    })
  },
  edit: function(req, res){

  },
  update: function(req, res){

  },
  delete: function(req, res){

  }
}
