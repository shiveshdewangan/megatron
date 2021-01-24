const express = require("express");
const app = express();

var d = new Date();

const delhiWeather = {
  place: "New Delhi",
  max: "10 Deg Celcius",
  min: "2 Dec Celius",
  date: d,
};

app.get("/weather/api/v1/delhi", (req, res) => {
  return res.status(200).json(delhiWeather);
});

app.listen(3000, () => {
  console.log(`Server is running on PORT 3000`);
});