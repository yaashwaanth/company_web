const express = require("express");
const { createProduct, showDetails, deleteProduct, addProductVideo, deleteVideo, showAllProducts } = require("../controllers/productControllers");
const upload = require("../middleware/multer");
const router = express.Router();
const isAuth = require("../middleware/isAuth");

// create product - [By Admin]

router.route("/createProduct").post(isAuth,upload,createProduct);

// show All products 

router.route("/allProducts").get(showAllProducts);

// show and delete a product 

router.route("/product/:id").get(showDetails).delete(isAuth,deleteProduct);

// add video of product
router.route("/addVideo/:id").post(isAuth,upload,addProductVideo);

// delete video   
router.route("/deleteVideo/:id").post(isAuth,deleteVideo);


module.exports = router;