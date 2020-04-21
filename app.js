const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');

const api = require('./server/routes/api');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/api', api);

app.listen(3000, () => {
    console.log('server started on port 3000');
});