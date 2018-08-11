var express = require('express');
var router = express.Router();
var movementsController = require('./../controllers/movementsController.js')



/* Los endpoints que vamos a manejar para crear o solicitar datos desde el cliente */
router.post('/movementxy', movementsController.movementsxy);
router.post('/movementz', movementsController.movementsz);
router.post('/pincers/open', movementsController.pincers_open);
router.post('/pincers/close', movementsController.pincers_close);



module.exports = router


