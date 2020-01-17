'use stric';

const carsService = require('../services/cars.service');
const _ = require('underscore');

const getCars = async(req, res) => {
    const cars = await carsService.getCars(req, res);
}

module.exports = {
    getCars
}