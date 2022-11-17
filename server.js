const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const winston = require("winston");

const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(morgan("combined"));

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/secret", (req, res) => {
  const { userInput } = req.body;
  if (userInput) {
    winston.log("info", `user input: ${userInput}`);
    res.status(200).json("success");
  } else {
    winston.error("this guy is messing with us");
    res.status(400).json("user already exists");
  }
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
