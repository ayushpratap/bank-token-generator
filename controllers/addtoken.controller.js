'use-strict';

const Token = require('../models/token.model');

module.exports = function addUserToQueue(req,res){
    //  Create new token using Token Model
    let newToken = new Token({
        tokenNumber : g_TokenCounter++,
        CustomerName : req.body.name,
        CustomerType : req.body.type,
        CustomerAction : req.body.action,
        userEnteredAt : Date.now(),
        userExitedAt : null
    });

    //  Add this user to queue with given priority
    g_PQ.enqueue(newToken,newToken.CustomerType);
    console.log(`user added`);
    //  Send the response of the request
    res.status(200).send({
        status:200,
        body: newToken,
        message: null
    });
};

