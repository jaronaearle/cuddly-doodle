const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// import schemas

const db = 'mongodb+srv://admin-jaron:testingtesting666@cluster0-fvqnq.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect( db, {
  useUnifiedTopology: true,
  useNewUrlParser: true 
    }).then(() => {
    console.log('Db connection successful');
    })
    .catch(err => console.log(err));

router.get('/', (req, res, next) => {
    console.log('Requesting home page');
    res.send('surprise mutha fucka\'');
});

router.get('*', (req, res, next) => {
    res.status(404).send('not found');
});

module.exports = router;