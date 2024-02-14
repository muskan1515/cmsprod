const express = require('express');

const router = express.Router();

const claimController = require("../Controllers/claimController");

router.post("/addClaim",claimController.addClaim);

router.get("/getAllClaims",claimController.getAllClaims);

router.post("/getClaimDetails",claimController.getClaimDetails);

router.get("/getSpecificClaim",claimController.getSpecificClaim);

router.put("/updateClaim/:leadId",claimController.updateClaim);

module.exports = router;



