//code added by sandeep panigrahi on 9/30/2016
//Routes has been added. These routes will be used by controllers afetr we merge the task together

var express = require('express'),
    bikeRouter = express.Router(),
    bikesController = require('../controllers/bikes.js')

  bikeRouter.route('/bikes')
    .get(bikesController.index)
    .post(bikesController.create)

  bikeRouter.route('/bikes/:id')
    .get(bikesController.show)
    .post(bikesController.update)
    //<Sandeep> changed the method name from destroy to delete as the controller action is named as delete
    .delete(bikesController.delete)

    module.exports = bikeRouter
