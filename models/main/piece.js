const mongoose = require('mongoose');
const order = require("../associate/order");

const pieceSchema = new mongoose.Schema({
    name: {type:String, required:true},
    price: {type:Number, required:true},
    order: [order]
});

module.exports = mongoose.model('Piece',pieceSchema);


