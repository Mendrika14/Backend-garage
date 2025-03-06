const mongoose = require('mongoose');

const chargeSchema = new mongoose.Schema({
    name: {type:String, required:true},
    price: {type:Number, required:true}
},{timestamps:true});

module.exports = mongoose.model('Charge',chargeSchema);


