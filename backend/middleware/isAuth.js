const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const ErrorHandler = require("../Utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");

const isAuth = catchAsyncErrors(async(req,res,next)=>{

    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler(401,"Please login to use the resource"))
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decodedData._id);

    next();
})

module.exports = isAuth;