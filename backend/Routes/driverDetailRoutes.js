const express = require('express');

const router = express.Router();

const driverDetailController = require("../Controllers/driverDetailController");
const authenticateUser = require('../Middleware/authenticateUser');

router.get("/getOnlineDriverDetails", authenticateUser,driverDetailController.getOnlineDriverDetails);



module.exports = router;