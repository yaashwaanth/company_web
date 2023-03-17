const app = require('./App');
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

dotenv.config({path:"./config/config.env"});

// connecting to database
connectDatabase();


// connecting to cloudinary
cloudinary.config({
   cloud_name:process.env.CLOUDINARY_CLIENT_NAME,
   api_key: process.env.CLOUDINARY_CLIENT_API,
   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
  
})

// error handlers define karna hai baad ma dek lena
app.listen(process.env.PORT,()=>{
   console.log(`Server is running on ${process.env.PORT}`);
});