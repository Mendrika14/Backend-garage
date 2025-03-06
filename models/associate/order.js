const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({    
    deliveryDate:{type: Date, required:true},
    quantity:{type: Number, required:true}
},{timestamps:true});

module.exports = orderSchema;