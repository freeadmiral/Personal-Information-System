const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    companyId: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 3
    },
    surname: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 3
    },
    dogumTarihi: {
        type: Date
    },
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 20,
        minlength: 3
    },
    password: {
        type: String,
        minlength: [3, '({PATH}), ({MİNLENGTH}) karakterden az olamaz!']
    },
    bolum: {
        type: String,

    },
    GirisTarihi: {
        type: Date
    },
    pozisyon: {
        type: string
    },
    cinsiyet: {
        type: String,
        required: true
    },
    sicilno: {
        type: Number,
        required: true

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;