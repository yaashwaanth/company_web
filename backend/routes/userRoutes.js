const express = require("express");
const {loginUser, logoutUser, getMyProfile, changePassword } = require("../controllers/userControllers");
const router = express.Router();
const isAuth = require("../middleware/isAuth");



//register user [future developments]
// router.route("/register").post(registerUser);


// Login User
 router.route("/login").post(loginUser);

 // Logout User
 router.route("/logout").get(logoutUser);
 
 // Load User
 router.route("/me").post( isAuth ,getMyProfile);

 // change password
 router.route("/changePassword").put( isAuth ,changePassword);




module.exports = router;