const express = require("express");
const router = express.Router({ mergeParams: true });
const random_nos = require("../controller/random_no.js");

router.get("/", random_nos.get_random_nos);

router.put(
  "/:fav_no/:fav_color/:year/:month/:day",
  random_nos.update_random_nos
);

module.exports = router;
