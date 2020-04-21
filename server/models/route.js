const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Route must have a name']
    },
    grade: {
        type: string,
        required: [true, 'Route must have a grade']
    },
    fa: {
        type: string,
        required: [true, 'Route must have a fa']
    }
});

module.exports = mongoose.model('route', routeSchema);