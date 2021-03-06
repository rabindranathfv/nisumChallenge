'use strict';
const _ = require('underscore');
const axios = require('axios');

const cars = [{
    manufacturer: 'Porsche',
    model: '911',
    wiki: 'http://en.wikipedia.org/wiki/Porsche_997',
    img: '2004_Porsche_911_Carrera_type_997.jpg'
}, {
    manufacturer: 'Nissan',
    model: 'GT-R',
    wiki: 'http://en.wikipedia.org/wiki/Nissan_Gt-r',
    img: '250px-Nissan_GT-R.jpg'
}, {
    manufacturer: 'BMW',
    model: 'M3',
    wiki: 'http://en.wikipedia.org/wiki/Bmw_m3',
    img: '250px-BMW_M3_E92.jpg'
}, {
    manufacturer: 'Audi',
    model: 'S5',
    wiki: 'http://en.wikipedia.org/wiki/Audi_S5#Audi_S5',
    img: '250px-Audi_S5.jpg'
}, {
    manufacturer: 'Audi',
    model: 'TT',
    wiki: 'http://en.wikipedia.org/wiki/Audi_TT',
    img: '250px-2007_Audi_TT_Coupe.jpg'
}];

const getCarsPrices = async() => {
    let resp = await axios.get(`${process.env.API_URL}`);
    let carPrices = await [...resp.data.prices];
    return carPrices;
};

const getCars = async(req, res) => {
    try {
        let cardPrices = await getCarsPrices();
        // console.log(cardPrices);
        let carFullInfo = [];
        let objectCar = {};
        cars.forEach(car => {
            cardPrices.forEach(price => {
                if (car.model === price.model) {
                    objectCar = {
                        manufacturer: car.manufacturer,
                        model: car.model,
                        wiki: car.wiki,
                        img: car.img,
                        price: price.price

                    };
                }
            });
            carFullInfo.push(objectCar);
        });
        res.json({
            ok: true,
            message: 'get list of cars successfully',
            carFullInfo: carFullInfo,
            cars: cars,
            carsPrices: cardPrices
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'troubles into apicars'
        })
    }
}

module.exports = {
    getCars,
    getCarsPrices
}