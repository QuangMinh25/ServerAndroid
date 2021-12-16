const express = require("express");
const cors = require("cors");
require("dotenv").config();
const logger = require("morgan");

const accountRouter = require("./routers/account.router");

const server = express();

// config data from client
server.use(logger("dev"));

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use("/", accountRouter);

server.listen(process.env.PORT || "3333", (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${process.env.PORT}`);
});
