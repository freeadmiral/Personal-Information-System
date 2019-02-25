const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Vacation = require("../models/Vacation");

router.post('/newVacation', function (req, res, next) {
    const vacation = new Vacation(req.body);
    const promise = vacation.save();
    promise
        .then(data => {
            res.json(data);
        })
        .then(err => {
            res.json(err);
        });
});

router.get("/getVacation/:userId", async (req, res, next) => {
    const vacation = await Vacation.aggregate([{
            $match: {
                'userId': mongoose.Types.ObjectId(req.params.userId)
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "user"
            }
        }, {
            $unwind: "$user"
        }, {
            $project: {
                vacationType: 1,
                leaveDate: {
                    $dateToString: {
                        format: "%Y-%m-%d",
                        date: "$leaveDate"
                    }
                },
                entryDate: {
                    $dateToString: {
                        format: "%Y-%m-%d",
                        date: "$entryDate"
                    }
                },
                reason: 1,
                address: 1,
                durum: 1,
                status: 1,
                user: '$user.username'
            }
        }
    ]);
    if (!vacation) return res.status(404).json({
        msg: "invalid username"
    });
    res.send(vacation);
});

router.get("/getHourlyVacation/:userId", async (req, res, next) => {
    const vacation = await Vacation.aggregate([{
            $match: {
                'userId': mongoose.Types.ObjectId(req.params.userId)
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "user"
            }
        }, {
            $unwind: "$user"
        }, {
            $project: {
                vacationType: 1,
                date: {
                    $dateToString: {
                        format: "%Y-%m-%d",
                        date: "$date"
                    }
                },
                startTime: 1,
                endTime: 1,
                reason: 1,
                address: 1,
                durum: 1,
                status: 1,
                user: '$user.username'

            }
        }
    ]);
    if (!vacation) return res.status(404).json({
        msg: "invalid username"
    });
    res.send(vacation);
});

router.post('/vacationReq', async (req, res, next) => {
    const {
        userId,
        vacationType,
        entryDate,
        leaveDate,
        address,
        reason,
        date,
        startTime,
        endTime
    } = req.body;
    console.log(req.body);
    const vacation = new Vacation({
        userId,
        vacationType,
        entryDate,
        leaveDate,
        reason,
        address,
        date,
        startTime,
        endTime
    });
    const promise = vacation.save();
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});


module.exports = router;