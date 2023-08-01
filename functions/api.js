const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const data = require('../Controller/controller.api.data')

router.get('/', (req, res) => {
    res.json(data.DummyData())
})

router.get('/about', (req, res) => {
    res.json(data.AboutDummyData())
})

app.use('/', router);

module.exports.handler = serverless(app);