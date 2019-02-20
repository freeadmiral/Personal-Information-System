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
        as: "şirket"
      }
    }
  ]);
  if (!user) return res.status(404).json({
    msg: "invalid username"
  });
  res.send(user);
});

router.get("/getUsers", async (req, res, next) => {
  const user = await Users.aggregate([{
      $project: {
        birthDate: {
          $dateToString: {
            format: "%d-%m-%Y",
            date: "$birthDate"
          }
        },
        name: 1,
        surname: 1
      }
    }

  ]);
  if (!user) return res.status(404).json({
    msg: "invalid username"
  });
  res.send(user);
});

module.exports = router;