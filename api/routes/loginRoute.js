const express = require("express");
const router = express.Router();
const db = require("../../data/dbModel");

router.get("/", (req, res) => {
  const { username } = req.params;
  db.getUserByusername(username).then(user => res.status(200).send(user));
});

module.exports = router;
