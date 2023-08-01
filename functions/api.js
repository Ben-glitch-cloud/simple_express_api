const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({'path': 'Home', 
    'firstName': 'Ben', 
    'lastName': 'Lawrence'})
})

router.get('/about', (req, res) => {
    res.json({'path': 'About', 
    'Info': 'More data', 
    'More info': 'More data to come'})
})

app.use('/', router);

module.exports.handler = serverless(app);