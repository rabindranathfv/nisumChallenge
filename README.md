# nisumChallenge

## Technical interview - backend challenge 

Create two servers using express and Emulate Orchestator concepts.

The first server will receive a GET request from the client (browser / postman).

This first server will have access to an array of cars but it needs to make another request to a second server to fetch an array of objects with the price for each car, with this last array it needs to do an orchestration, create a bigger object adding the price for each car, and finally send the response back to the client.

First server response:

```
const cars = [{
        manufacturer: 'Porsche',
        model: '911',
        wiki: 'http://en.wikipedia.org/wiki/Porsche_997',
        img: '2004_Porsche_911_Carrera_type_997.jpg'
    },{
        manufacturer: 'Nissan',
        model: 'GT-R',
        wiki:'http://en.wikipedia.org/wiki/Nissan_Gt-r',
        img: '250px-Nissan_GT-R.jpg'
    },{
        manufacturer: 'BMW',
        model: 'M3',
        wiki:'http://en.wikipedia.org/wiki/Bmw_m3',
        img: '250px-BMW_M3_E92.jpg'
    },{
        manufacturer: 'Audi',
        model: 'S5',
        wiki:'http://en.wikipedia.org/wiki/Audi_S5#Audi_S5',
        img: '250px-Audi_S5.jpg'
    },{
        manufacturer: 'Audi',
        model: 'TT',
        wiki:'http://en.wikipedia.org/wiki/Audi_TT',
        img: '250px-2007_Audi_TT_Coupe.jpg'
    }];
```

Second server responde:
```
const prices = [{
        manufacturer: 'Porsche',
        model: '911',
        price: 135000,
    },{
        manufacturer: 'Nissan',
        model: 'GT-R',
        price: 80000,
    },{
        manufacturer: 'BMW',
        model: 'M3',
        price: 60500,
    },{
        manufacturer: 'Audi',
        model: 'S5',
        price: 53000,
    },{
        manufacturer: 'Audi',
        model: 'TT',
        price: 40000,
    }];
```
