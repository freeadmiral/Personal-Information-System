const express = require("express");
const router = express.Router();

const Users = require("../models/Users");
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

router.get("/getCompany/:username", async (req, res, next) => {
    const user = await Users.aggregate([{
            $match: {
                'username': req.params.username
            }
        },
        {
            $lookup: {
                from: "companies",
                localField: "companyId",
                foreignField: "_id",
                as: "company"
            }
        },
        {
            $unwind: "$company"
        },
        {
            $project: {
                _id: 0,
                _id: "$company._id",
                name: "$company.name",
                logo: "$company.logo"
            }
        }
    ]);
    if (!user) return res.status(404).json({
        msg: "invalid username"
    });
    res.send(user);
});

router.put("/:id", async (req, res, next) => {
    console.log(req.body);
    const company = await Company.findByIdAndUpdate(
        req.params.id, {
            name: req.body.name
        }, {
            new: true
        }
    );
    if (!company)
        return res
            .status(404)
            .send("The company with the given ID was not found.");

    res.send(company);
})

module.exports = router;