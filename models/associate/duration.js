const mongoose = require('mongoose');

const durationSchema = new mongoose.Schema({    
    startDate: { type: Date, required:true },
    endDate: { type: Date, required:true }
});

module.exports = durationSchema;




