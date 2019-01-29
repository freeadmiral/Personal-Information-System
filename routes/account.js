const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const jwt = require('jsonwebtoken');


router.post('/login', (req, res) => {
    const {
        companyId,
        username,
        password
    } = req.body;

    Users.findOne({
        companyId,
        username,
        password
    }, (err, user) => {
        if (err) throw err;
        if (!user) {
            res.json({
                message: "user not found"
            });
        } else {
            const payload = {
                username
            };
            const token = jwt.sign(payload, req.app.get('api_secret_key'), {
                expiresIn: 720
            });
            res.json({
                token,
                user
            })
        }
    });
});

module.exports = router;