const express = require("express");
const router = express.Router();
const db = require("../../data/dbModel");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.getUser(id).then(user => res.status(200).send(user));
});

module.exports = router;
