'use-strict';

const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    tokenNumber : {
        type: Number,
        required: "Provide token number"
    },
    CustomerName:{
        type: String,
        required: "Provide name of customer"
    },
    CustomerType:{
        type: Number,
        required: "Provide customer type"
    },
    CustomerAction:{
        type: String,
        required: "Provide cutomer action"
    },
    userEnteredAt: Date,
    userExitedAt: Date,
});

TokenModel = mongoose.model('token',TokenSchema);

module.exports = TokenModel;