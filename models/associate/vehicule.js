const mongoose = require('mongoose');

const vehiculeSchema = new mongoose.Schema({
    types:{type:String, required:true},
    marque:{type:String, required:true},
    model:{type:String, required:true},
    numberSeries:{type:String, required:true},
    yearManufacturer:{type:Number, required:true},
    transmission:{type:String, required:true}
}) 

module.exports = vehiculeSchema;