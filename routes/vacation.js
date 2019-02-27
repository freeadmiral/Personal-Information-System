const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Vacation = require("../models/Vacation");

router.get("/getVacation/:userId", async (req, res, next) => {
    const vacation = await Vacation.aggregate([{
            $match: {
                userId: mongoose.Types.ObjectId(req.params.userId),
                startTime: {
                    $exists: false
                }
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $unwind: "$user"
        },
        {
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
                user: "$user.username"
            }
        }
    ]);
    if (!vacation)
        return res.status(404).json({
            msg: "invalid username"
        });
    res.send(vacation);
});

router.get("/getHourlyVacation/:userId", async (req, res, next) => {
    const vacation = await Vacation.aggregate([{
            $match: {
                userId: mongoose.Types.ObjectId(req.params.userId),
                startTime: {
                    $exists: true
                }
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $unwind: "$user"
        },
        {
            $project: {
                startTime: 1,
                vacationType: 1,
                reason: 1,
                address: 1,
                endTime: 1,
                date: {
                    $dateToString: {
                        format: "%d-%m-%Y",
                        date: "$date"
                    }
                },
                status: 1

            }
        }
    ]);
    if (!vacation)
        return res.status(404).json({
            msg: "invalid username"
        });
    res.send(vacation);
});

router.post("/vacationReq", async (req, res, next) => {
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
    promise
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get('/getTodayVacations', async (req, res, next) => {
    let today = new Date().toISOString().slice(0, 10)
    const vacations = await Vacation.find({
        $or: [{
            "date": today,
            $where: `return this.entrDate >= ${today} && this.leaveDate <= ${today}`
        }]
    });
    if (!vacations)
        return res.status(404).json({
            msg: "invalid username"
        });
    res.send(vacations);
});

module.exports = router;