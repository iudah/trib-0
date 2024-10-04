const express = require("express");
const router = express.Router();
const db = require("../controller/db.js");
const respondent = require("./respondent.js");
const favorite_dob = require("./favorite_dob.js");
const random_nos = require("./random_nos.js");
const bias_random = require("./bias_random.js");

router.use("/:id_1/:id_2/respondent", respondent);
router.use("/:id_1/:id_2/pref_dob", favorite_dob);
router.use("/:id_1/:id_2/random_numbers", random_nos);
router.use("/:id_1/:id_2/bias_rnd", bias_random);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
  //res.sendFile("../public/izz")
});

router.get("/:id_1/:id_2", function (req, res, next) {
  res.redirect(`respondent`);
});

module.exports = router;
