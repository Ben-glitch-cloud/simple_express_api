const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

const data = require('../Controller/controller.api.data')

router.get('/', (req, res) => {
    res.render('pages/index', {data: data.DummyData()})
})

router.get('/about', (req, res) => {
    res.render('pages/about', {data: data.AboutDummyData()})
})

app.use('/', router);

module.exports.handler = serverless(app);