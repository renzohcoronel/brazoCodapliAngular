var express = require('express');
var router = express.Router();
var movementsController = require('./../controllers/movementsController.js')



/* Los endpoints que vamos a manejar para crear o solicitar datos desde el cliente */
router.get('/movementxy', movementsController.movementsxy);
router.get('/movementz', movementsController.movementsz);
router.get('/pincers', movementsController.pincers);



module.exports = router


