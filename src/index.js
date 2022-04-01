const express = require("express");

// express app
const app = express();

// dotenv config
require("dotenv").config();

// connect to db
const connect = require("./configs/db");
connect();

// global middleware
app.use(express.json());

// importing controllers
const hotelController = require("./controllers/hotel.controller");
const roomTypeController = require("./controllers/roomType.controller");

// redirecting to right controller
app.use("/hotels", hotelController);
app.use("/roomtypes", roomTypeController);




// listening to port 3077
app.listen(3077);