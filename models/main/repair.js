const mongoose = require('mongoose');

const repairSchema = new mongoose.Schema({    
    mechanic:{type:Number, required:true},
    duration:{type:Number, required:true},
    price:{type:Number, required:true}
},{timestamps:true});

module.exports = mongoose.model('Repair',repairSchema);
