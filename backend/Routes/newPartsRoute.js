const express = require('express');

const router = express.Router();

const newPartsController = require("../Controllers/newPartsController");
const authenticateUser = require('../Middleware/authenticateUser');

router.get("/getNewParts/:leadId",authenticateUser,newPartsController.getSpecificNewParts);

router.put("/updateNewParts1/:leadId", authenticateUser, newPartsController.updateNewParts1);


module.exports = router;