const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

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
    }
  ]);
  if (!user) return res.status(404).json({
    msg: "invalid username"
  });
  res.send(user);
});

router.get("/getUsers/birthDate", async (req, res, next) => {
  const day = (new Date()).getDate();
  const month = (new Date()).getMonth();
  const users = await Users.find({
    $where: `return this.birthDate.getDate() === ${day} && this.birthDate.getMonth() === ${month}`
  }).exec();
  if (!users) return res.status(404).json({
    msg: "invalid username"
  });
  res.send(users);
});

router.get("/getAllUsers", async (req, res, next) => {
  const users = await Users.find({
    __v: 0
  })
  if (!users) return res.status(404).json({
    msg: "invalid username"
  });
  res.send(users);
});





module.exports = router;