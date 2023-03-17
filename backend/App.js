const express = require("express");
const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");
const enquiry = require("./routes/productEnquiryRoutes");
const {ErrorMiddleware} = require("./middleware/Error");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

// using middleware
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({   
    extended:true
}))
app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}));

app.use(cookieparser());
// Importing and using routes
app.use("/api",product);
app.use("/api",user);
app.use("/api",enquiry);



app.use(ErrorMiddleware);

module.exports = app;