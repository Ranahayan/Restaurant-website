const config = require("config");

module.exports = function () {
  if (!config.get("jwtprivatekey")) {
    throw new Error("FETAL ERROR! jwtprivatekey is not defined");
  }
};
