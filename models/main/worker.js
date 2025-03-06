const mongoose = require('mongoose');
const unvailables = require('../associate/unvailable');

const workerSchema = new mongoose.Schema({    
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    income:{type:Number, required:true},
    type:{type:String, required:true},
    isActive:{type:Boolean, require:true},
    unvailableDate:[unvailables]
},{timestamps:true});


module.exports = mongoose.model('Worker',workerSchema);
