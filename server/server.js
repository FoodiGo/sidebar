const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');

const app = express();

app.use(bodyParser.json());
app.use('/', router);
app.use(express.static(path.join(__dirname, '/../client/dist')));


app.listen(3400);

module.exports = app;
