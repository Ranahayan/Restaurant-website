const { createLogger, transports } = require("winston");
require("express-async-errors");

const MongoDB = require("winston-mongodb").MongoDB;

const logger = createLogger({
  transports: [
    new transports.File({
      filename: "combined.log",
    }),
    new transports.Console(),
  ],
});

module.exports = logger;
