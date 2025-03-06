const mongoose = require('mongoose');
const duration = require('./duration');
const worker = require('./worker');

const unavailableSchema = new mongoose.Schema({    
    duration: duration,
    worker: [worker],
    reason:{type:String, required:true}
},{timestamps:true});

module.exports = unavailableSchema;
