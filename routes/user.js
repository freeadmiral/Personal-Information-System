const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const User = require("../models/Users");

router.get('/users', (req, res) => {
    res.send("user");
});

router.post('/users', function (req, res, next) {
    const user = new User(req.body);
    const promise = user.save();

    promise.then((data) => {
        res.json(data);
    }).then((err) => {
        res.json(err);
    });

});

module.exports = router;