const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/index");

// express
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
