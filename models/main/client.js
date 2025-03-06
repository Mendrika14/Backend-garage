const mongoose = require('mongoose');
const vehicule = require("../associate/vehicule");


const clientSchema = new mongoose.Schema({    
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    birthday:{type:Date, required:true},
    isActive:{type:Boolean, require:true},
    vehicule: [vehicule]
},{timestamps:true});


module.exports = mongoose.model('Client',clientSchema);




