const express = require("express");
const router = express.Router({ mergeParams: true });
const favorite_dob = require("../controller/favorite_dob.js");

router.get("/", favorite_dob.get_favorite_dob);

router.put(
  "/:fav_no/:fav_color/:year/:month/:day",
  favorite_dob.update_favorite_dob
);

module.exports = router;
