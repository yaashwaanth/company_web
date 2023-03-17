const express = require("express");
const { makeEnquiry, deleteEnquiry, getAllEnquiry } = require("../controllers/productEnquiryControllers");

const router = express.Router();

// create enquiry
router.route("/createEnquiry").post(makeEnquiry);

// delete enquiry
router.route("/deleteEnquiry/:id").delete(deleteEnquiry);

// get all enquiry
router.route("/allEnquiry").get(getAllEnquiry);




module.exports = router;