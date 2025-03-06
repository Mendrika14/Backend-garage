const mongoose = require('mongoose');
const piece = require('./piece');
const worker = require('./worker');
const repair = require('./repair');
const appointment = require('./appointment');


const quoteSchema = new mongoose.Schema({    
    piece:[piece],
    realrepair: [repair],
    appointment: appointment,
    realworker: [worker]
},{timestamps:true});


module.exports = mongoose.model('Quote',quoteSchema);




