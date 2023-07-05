const mongoose = require('mongoose');
const scheduleSchema = new mongoose.Schema({
    
    vehicleType: {
        type: String,
        required: true,
    },
    vehicleStatus: {
        type: String,
        required: true,
    },
    driverName: {
        type: String,
        required: true,
    },
    clientName: {
        type: String,
        required: true,
    },
    clientCompany: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    pickUp: {
        type: String,
        required: true,
    },
    dropOff: {
        type: Date,
        required: true,
    },
    note: {
        type: Date,
    },
}, { timestamps: true });

module.exports = mongoose.model('schedule', scheduleSchema);