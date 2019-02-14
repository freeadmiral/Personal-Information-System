const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const Users = require("../models/Users");

router.get("/api/users", verifyToken, (req, res) => {
  res.send("users");
});

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

router.get("/getUser", async (req, res, next) => {
  const user = await Users.aggregate([{
      $match: {
        'username': req.body.username
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
  res.json(user);
});

module.exports = router;