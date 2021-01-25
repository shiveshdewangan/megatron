const express = require("express");
const router = express.Router();
const { getData, getWeatherInfo } = require("../controllers/index");

router.get("/", getData);
router.get("/weather/v1", getWeatherInfo);

module.exports = router;
