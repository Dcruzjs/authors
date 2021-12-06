const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
// const bodyParser = require("body-parser");
const AuthorRouter = require("./server/routes/AuthorRouter");

require("./server/config/database");
require("dotenv").config();

// adding Helmet to enhance your API's security
app.use(helmet());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/", AuthorRouter);

app.listen(process.env.PORT, function () {
  console.log(`The users server is running in port ${process.env.PORT}.`);
});
