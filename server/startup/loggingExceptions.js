const { transports } = require("winston");
const MongoDB = require("winston-mongodb").MongoDB;

module.exports = function (logger) {
  logger.exceptions.handle(
    new transports.File({ filename: "UnhandledExceptions.log" })
  );
  new MongoDB({
    db: "mongodb://localhost/Restaurant",
    level: "info",
  });
  new transports.Console();

  process.on("unhandledRejection", (ex) => {
    console.log("we got an unhandled rejection");
    throw ex;
  });
};
