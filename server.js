'use-strict';

//  Get npm modules
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./swagger.yaml');

//  Get the env variables
dotenv.config();

//  Get the priority queue
const PriorityQ = require('./services/pirorityQueue');

//  Get the routes
const customerRoute = require('./routes/user.route');
const counterRoute = require('./routes/counter.route');

//  Get the express instance for application
const app = express();

//  Set the port

const PORT = process.env.PORT || 9000;

//  Set token number
global.g_TokenCounter = 1;

//  Create global priority queue
global.g_PQ = new PriorityQ();

//  Set the middleware for json parser
app.use(cors());
app.use(express.json());

//  Set the middleware for urlencoding
app.use(express.urlencoded({extended:true}));

//  Set the routes
app.use('/api/v1/customer', customerRoute);
app.use('/api/v1/counter', counterRoute);

//  Api documentation

app.use('/api/v1/docs',swaggerUi.serve,swaggerUi.setup(swaggerDoc));

//  Connect to database
mongoose.connect(process.env.DB_URL, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true});
var db = mongoose.connection;

db.once('open',()=>{
    //  Start the HTTP server
    app.listen(PORT,()=> console.log(`Server running at port ${PORT}`));
});