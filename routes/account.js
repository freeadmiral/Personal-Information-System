const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users = require('../models/Users');
const Joi = require("joi");


router.post('/login', async (req, res) => {
    const {
        username,
        password
    } = req.body;

    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await Users.findOne({
        username,
        password
    });

    if (!user) return res.status(400).send("invalid email or password");

    const token = user.generateAuthToken();
    res.send(token);
});

function validate(req) {
    const schema = {
        username: Joi.string().min(3).required(),
        password: Joi.string().min(6).max(15).required()
    };
    return Joi.validate(req, schema);
}

module.exports = router;