'use stric';

const carsService = require('../services/cars.service');
const _ = require('underscore');

const getCarsPrices = async(req, res) => {
    const carsPrices = await carsService.getCarsPrices(req, res);
}

module.exports = {
    getCarsPrices
}