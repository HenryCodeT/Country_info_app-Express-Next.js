console.log("**************** 1-server ********************");

// **** EXPRESS *********************************************
const express = require("express");
// **** CORS ************************************************
const cors = require("cors");

const app = express();
const port = 8080;

// using cors permitions
app.use(cors());
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes function and apply it
const allRoutes = require('./routes/routes');
allRoutes(app);

console.log("---------------- 1-server --------------------");
const server = app.listen(port, () =>
  console.log(`Fake API (Core) on port ${server.address().port}!`)
);
