const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const Users = require("../models/Users");
const Company = require("../models/Company");
const mongoose = require("mongoose");

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

router.get("/:user_id", async (req, res, next) => {
  const user = await Users.aggregate([{
      $match: {
        '_id': mongoose.Types.ObjectId(req.params.user_id)
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
  // if (!user) return res.status(404).send("user not found");
  res.json(user);
});

module.exports = router;