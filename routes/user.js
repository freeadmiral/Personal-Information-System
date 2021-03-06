const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const moment = require('moment');

router.post("/register", function (req, res, next) {
  const user = new Users(req.body);
  const promise = user.save();

  promise
    .then(data => {
      res.json(data);
    })
    .then(err => {
      res.json(err);
    });
});

router.get("/getUser/:username", async (req, res, next) => {
  const user = await Users.aggregate([{
      $match: {
        username: req.params.username
      }
    },
    {
      $lookup: {
        from: "companies",
        localField: "companyId",
        foreignField: "_id",
        as: "company"
      }
    }
  ]);
  if (!user)
    return res.status(404).json({
      msg: "invalid username"
    });
  res.send(user);
});

router.get("/getUsers/birthDate", async (req, res, next) => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const users = await Users.find({
    $where: `return this.birthDate.getDate() === ${day} && this.birthDate.getMonth() === ${month}`
  }).exec();
  if (!users)
    return res.status(404).json({
      msg: "invalid username"
    });
  res.send(users);
});

router.get("/getAllUsers", async (req, res, next) => {
  const users = await Users.find({
    __v: 0
  });
  if (!users)
    return res.status(404).json({
      msg: "invalid username"
    });
  res.send(users);
});

router.put("/updateUser/:id", async (req, res, next) => {
  const user = await Users.findByIdAndUpdate(
    req.params.id, {
      name: req.body.name,
      surname: req.body.surname,
      username: req.body.username,
      birthDate: moment(req.body.birthDate).format("YYYY-MM-DD"),
      password: req.body.password,
      department: req.body.department,
      entryDate: moment(req.body.entryDate).format("YYYY-MM-DD"),
      position: req.body.position,
      gender: req.body.gender,
      registraitonNo: req.body.registraitonNo,
      responsibilites: req.body.responsibilites,
      country: req.body.country,
      city: req.body.city,
      website: req.body.website,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      skills: req.body.skills
    }, {
      new: true
    }
  );
  if (!user)
    return res.status(404).send("The company with the given ID was not found.");

  res.send(user);
});

router.get("/cityAnalytic", async (req, res, next) => {
  const cityCount = await Users.aggregate([{
      $match: {
        __v: 0
      }
    },
    {
      $group: {
        _id: "$city",
        count: {
          $sum: 1
        }
      }
    }
  ]);
  if (!cityCount)
    return res.status(404).json({
      msg: "yok"
    });
  res.send(cityCount);
});

router.get("/positionAnalytic", async (req, res, next) => {
  const positionCount = await Users.aggregate([{
      $match: {
        __v: 0
      }
    },
    {
      $group: {
        _id: "$position",
        count: {
          $sum: 1
        }
      }
    }
  ]);
  if (!positionCount)
    return res.status(404).json({
      msg: "yok"
    });
  res.send(positionCount);
});

module.exports = router;