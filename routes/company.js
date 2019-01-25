const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const Company = require("../models/Company");

router.post('/company', function (req, res, next) {
    const company = new Company(req.body);
    const promise = company.save();

    promise.then((data) => {
        res.json(data);
    }).then((err) => {
        res.json(err);
    });

});

module.exports = router;