const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Users = require("../models/Users");

router.get('/api/users', (req, res) => {
    res.send("users");
});

router.post('/register', function (req, res, next) {
    const user = new Users(req.body);
    const promise = user.save();

    promise.then((data) => {
        res.json(data);
    }).then((err) => {
        res.json(err);
    });

});







module.exports = router;