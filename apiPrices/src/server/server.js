const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// parse applicattion /x-www/form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

require('./config/config');
app.use(cors());
app.use(require('./config/headers'));

app.use(require('./api/routes/indexRoutes'));

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});