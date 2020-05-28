const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');

const auth = require('../../middleware/auth');

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

router.get('/me', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user);
    }  catch (e) {
        res.send({
            message: 'Error finding user'
        });
    }
});

router.get('*', (req, res, next) => {
    res.status(404).send('not found');
});

module.exports = router;