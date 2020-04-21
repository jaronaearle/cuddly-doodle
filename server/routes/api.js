const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// import schemas

// const db = ''; // db connection string

// mongoose.Promise = global.Promise;
// mongoose.connect(db, err => {
//     if (err) {
//         console.log('Error connecting to the database');
// });

router.get('/', (req, res, next) => {
    console.log('Requesting home page');
    res.send('surprise mutha fucka\'');
});

router.get('*', (req, res, next) => {
    res.status(404).send('not found');
});

module.exports = router;