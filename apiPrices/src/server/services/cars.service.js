'use strict';
const _ = require('underscore');

const prices = [{
    manufacturer: 'Porsche',
    model: '911',
    price: 135000,
}, {
    manufacturer: 'Nissan',
    model: 'GT-R',
    price: 80000,
}, {
    manufacturer: 'BMW',
    model: 'M3',
    price: 60500,
}, {
    manufacturer: 'Audi',
    model: 'S5',
    price: 53000,
}, {
    manufacturer: 'Audi',
    model: 'TT',
    price: 40000,
}];
const getCarsPrices = async(req, res) => {
    try {
        console.log('llego al servicio');
        res.json({
            ok: true,
            message: 'get list of prices successfully',
            prices: prices
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'troubles into apicarsprices'
        })
    }
}

module.exports = {
    getCarsPrices
}