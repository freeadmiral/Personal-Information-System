const mongoose = require('mongoose');

const VacationSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    vacationType: {
        type: String,
    },
    entryDate: {
        type: Date,
    },
    leaveDate: {
        type: Date,
    },
    numberOfVacationDay: {
        type: Number,
    },
    reason: {
        type: String,
    },
    address: {
        type: String,
    },
    status: {
        type: String
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    date: {
        type: Date
    }
});

const Vacation = mongoose.model('Vacation', VacationSchema);
module.exports = Vacation;