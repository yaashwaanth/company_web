const User = require("../models/Users");
const ErrorHandler = require("../Utils/errorHandler");
const sendToken = require("../Utils/sendToken");

// register user [future purposes]

// exports.registerUser = async(req,res,next)=>{
//     const {name,email,password} =req.body;

//     if(!email || !password){
//         return next(new Error("Please enter email or password"))
//     }

//     const user = await User.create({
//         name,email,password
//     })

//     res.status(200).json({
//         success:true,
//         message:"User created successfully",
//         user
//     })
// }


// user login

exports.loginUser = async(req,res,next)=>{

    const {email,password} =req.body;

    if(!email || !password){
        return next(new ErrorHandler(400,"Please enter all feilds"))
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler(401,"User Does't exist's "));
    }


    const passwordMatched = await user.comparePassword(password);
  
    if(!passwordMatched){
        return next(new ErrorHandler(401,"Incorrect Email or Password"))
    }
    
    // creating cookies
    sendToken(res,user,`Welcome back ${user.name}`,200)
}

// logout

exports.logoutUser = async(req,res,next)=>{

    res.status(200).cookie("token",null,{
        expires:new Date(Date.now())
    }).json({
        success:true,
        message:"Logged Out Successfully"
    })

}



// Get my profile

exports.getMyProfile=async(req,res,next)=>{
   
    const user= await User.findById(req.user._id);

    res.status(200).json({
        success:true,
        user,
    })

}


// Get login user details

exports.getMyProfile=async(req,res,next)=>{
   
    const user= await User.findById(req.user._id);

    res.status(200).json({
        success:true,
        user,
    })

}


//Change password

exports.changePassword=async(req,res,next)=>{
   
    const {oldPassword,newPassword,confirmPassword} =req.body;

    if(!oldPassword || !newPassword || !confirmPassword){
        return next(new ErrorHandler("Enter all feilds",400));
    }

    const user= await User.findById(req.user._id).select("+password");

    const isMatched = await user.comparePassword(oldPassword);

    if(!isMatched){
        return next(new ErrorHandler("Incorrect Old password",400))
    }

    if(newPassword !== confirmPassword){
        return next(new ErrorHandler("confirm password must same as  new password"))
    }

    if(newPassword === confirmPassword){
    user.password=newPassword;
        
    }

    await user.save();

    res.status(200).json({
        success:true,
        message:"Password Changed Successfully"
    })

}