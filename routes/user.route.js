'use-strict';

const router = require('express').Router();
const addUserToQueue = require('../controllers/addtoken.controller');

router.get('/',(req,res)=>{
    console.log('get request');
    res.send('hello');
});

router.post('/',addUserToQueue);

module.exports = router;