const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// Connect to mongo
mongoose
  .connect(
    keys.mondoDB.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
