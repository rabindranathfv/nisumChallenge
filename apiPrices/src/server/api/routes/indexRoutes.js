const express = require('express');

const app = express();

app.use(require('./cars'));


module.exports = app;