const express = require("express");
const app = express();
const data = require("../data/index");

exports.getData = (req, res) => {
  // return res.status(200).json("Node Expess Backend API");
  return res.send(
    "<!DOCTYPE html><html><head><style>h2{text-align: center;}table {font-family: arial, sans-serif;border-collapse: collapse;width: 70%;text-align: center;margin: 0 auto;}td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}tr:nth-child(even) {background-color: #dddddd;}</style></head><body><h2>Backend API - Node & Express</h2><table><tr><th>Method</th><th>API Endpoint</th></tr><tr><td>GET</td><td>https://chapter-time-api.herokuapp.com/api</td></tr><tr><td>GET</td><td>https://chapter-time-api.herokuapp.com/api/weather/v1?city=delhi</td></tr><tr><td>GET</td><td>https://chapter-time-api.herokuapp.com/api/weather/v1?city=tokyo</td></tr><tr><td>GET</td><td>https://chapter-time-api.herokuapp.com/api/weather/v1?city=london</td></tr></table></body></html>"
  );
};

exports.getWeatherInfo = (req, res) => {
  const city = req.query.city.toLowerCase();
  return res.status(200).json(data[city]);
};
