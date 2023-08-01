const express = require('express');
const serverless = require('serverless-http');
const path = require('path')

const app = express();
const router = express.Router();

const data = require('../Controller/controller.api.data')

router.get('/', (req, res) => {
    res.send(data.DummyData())
})

router.get('/about', (req, res) => {
    res.send(data.AboutDummyData())
})

app.use('/', router);

module.exports.handler = serverless(app);