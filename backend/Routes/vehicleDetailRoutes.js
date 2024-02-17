const express = require('express');

const router = express.Router();

const vehicleDetailController = require("../Controllers/vehicleDetailController");
const authenticateUser = require('../Middleware/authenticateUser');

router.get("/getOnlineVehicleData", authenticateUser,vehicleDetailController.getOnlineVehicleData);

module.exports = router;