const express = require("express");

const router = express.Router();

router.route("/login").get((req, res) => {
  res.render("login");
});

router.route("/google").get((req, res) => {
  res.send("logging google");
});

router.route("/logout").get((req, res) => {
  res.send("logg out");
});

module.exports = router;
