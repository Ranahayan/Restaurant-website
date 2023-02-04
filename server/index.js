const express = require("express");
const app = express();

const logger = require("./startup/logger");
require("./startup/db")(logger);
require("./startup/loggingExceptions")(logger);
require("./startup/config");
require("./startup/validations");

const port = process.env.PORT || 8080;
app.listen(port, () => logger.info(`Listening on port ${port}...`));
