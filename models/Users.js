const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const Joi = require("joi");

const UserSchema = new mongoose.Schema({
    companyId: mongoose.Schema.Types.ObjectId,
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
    birthDate: {
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
    department: {
        type: String,

    },
    entryDate: {
        type: Date
    },
    position: {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    registraitonNo: {
        type: Number,
        required: true

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this._id,
        name: this.name,
        username: this.username,
        position: this.position
    }, keys.api_secret_key);
    return token;
};

function validateUser(user) {
    const schema = {
        username: Joi.string().min(3).required(),
        password: Joi.string().min(6).max(15).required()
    };
    return Joi.validate(user, schema);
}

const User = mongoose.model('User', UserSchema);
module.exports = User;
exports.validate = validateUser;