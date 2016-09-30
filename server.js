var
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  bikeRoutes = require('./routes/bikes.js');


////////Mongoose Connections//////////////
mongoose.connect('mongodb://localhost/bike-shop', function(err) {
  if(err){console.log("Problem connecting to Mongo");}
  else {console.log("Connected to Mongo. Boom!");}
});
/////////////////////////////////////


///////Middleware//////
app.use(logger('dev'));
app.use(bodyParser.json());
//////////////////////


app.get('/', function(req, res) {
  res.json({message: "COLLABORATION PROJECT INITIALISED"});
});


app.use('/', bikeRoutes);


app.listen(3000, function() {
  console.log("Server is running on 3000");
});
