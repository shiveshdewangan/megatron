const express = require("express");
const app = express();
const data = require("../data/index");

exports.getData = (req, res) => {
  return res.status(200).json("Node Expess Backend API");
};

exports.getWeatherInfo = (req, res) => {
  const city = req.query.city.toLowerCase();
  return res.status(200).json(data[city]);
};
