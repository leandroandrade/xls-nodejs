'use strict';

const express = require('express');
const app = express();

const xlsroute = require('./routes/xls-route');

app.use('/xls', xlsroute);

app.listen(3000, function () {
    console.log('Starting server on port 3000');
});