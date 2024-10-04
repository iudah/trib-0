const express = require("express");
const router = express.Router({ mergeParams: true });
const respondent = require("../controller/respondent.js");

router.get("/", respondent.get_respondent_data);

router.put("/:country/:gender", respondent.add_respondent_data);

module.exports = router;
