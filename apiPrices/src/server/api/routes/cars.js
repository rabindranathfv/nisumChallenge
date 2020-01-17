'use stric';
const express = require('express');
const carCtrl = require('../../controllers/cars.ctrl');

const app = express();

app.get('/api/v1/cars-prices', carCtrl.getCarsPrices);

module.exports = app;