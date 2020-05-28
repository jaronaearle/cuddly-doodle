const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');

const api = require('./server/routes/api');
const user = require('./server/models/user');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(api);
app.use('/user', user);


const port = process.env.PORT || '3000';

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});