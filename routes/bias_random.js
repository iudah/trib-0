const express = require("express");
const router = express.Router({ mergeParams: true });
const bias_random = require("../controller/bias_random.js");

router.get("/", bias_random.get_bias_random);

router.put("/:bias10/:bias100/:finished", bias_random.update_bias_random);

module.exports = router;
