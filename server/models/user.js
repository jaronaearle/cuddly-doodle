const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User must have a name']
    },
    password: {
        type: String,
        required: [true, 'User must have a password']
    },
    ticks: []
});

module.exports = mongoose.model('user', userSchema);