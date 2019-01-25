const mongoose = require('mongoose');

const VacationSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    vacationType: {
        type: String,
        required: true
    },
    leaveDate: {
        type: Date,
        required: true
    },
    entryDate: {
        type: Date,
        required: true
    },
    numberOfVacationDay: {
        type: Number,
    },
    reason: {
        type: String,
        maxlength: 1000,
        minlength: 10
    },
    adress: {
        type: String,
    }
});

const Vacation = mongoose.model('Vacation', VacationSchema);
module.exports = Vacation;