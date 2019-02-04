const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const keys = require("../config/keys");


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

// router.get('/dashboard', (req, res, next) => {
//     const decoded = jwt.verify(req.headers['authorization'], keys.api_secret_key);
//     Users.findOne({
//         _id: decoded._id
//     }).then(user => {
//         if (user) {
//             res.json(user);
//         } else {
//             res.send("user not exist");
//         }
//     }).catch(err => {
//         res.send(err);
//     });
// });

module.exports = router;