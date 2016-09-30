var
  mongoose = require('mongoose'),

  //establish allowed properties of a fruit
  bikeSchema = mongoose.Schema({
    brand: String,
    price: Number
  });

module.exports = mongoose.model('Bike', bikeSchema);
