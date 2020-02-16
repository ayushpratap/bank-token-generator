 'use-strict';

 // Get the router instance
 const router = require('express').Router();
 const clearCounter = require('../controllers/counter.controller');

 // Set the controller to clear the customer from counter
 router.post('/',clearCounter);

 module.exports = router;