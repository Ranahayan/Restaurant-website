const mongoose = require("mongoose");

module.exports = function (logger) {
  mongoose
    .connect("mongodb://localhost/Restaurant")
    .then(() => logger.info("Connect to db"));
};
