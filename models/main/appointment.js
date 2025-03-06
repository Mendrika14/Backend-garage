const mongoose = require('mongoose');
const repair = require('./repair');
const client = require('./client');
const worker = require('./worker');

const appointmentSchema = new mongoose.Schema({    
    startDate:{type:Date, required:true},
    client: client,
    repair: [repair],
    worker: [worker],
    isCancelled: {type:Boolean, required:true}
},{timestamps:true});

module.exports = mongoose.model('Appointment',appointmentSchema);
