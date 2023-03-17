const Enquiry = require("../models/productEnquiry");
const ErrorHandler = require("../Utils/errorHandler");




// get all enquiry
exports.getAllEnquiry=async(req,res,next)=>{
   
    const enquiry =await Enquiry.find();
  
       res.status(200).json({
          success:true,
          enquiry
       })
  }

// making enquiry
exports.makeEnquiry=async(req,res,next)=>{
    const {mobileNumber,product} = req.body;

    if(!mobileNumber || !product){
        return next(new ErrorHandler(401,"Enter All feilds"));
    }
     const enquiry =await Enquiry.create({
        mobileNumber,product
     });

     res.status(200).json({
        success:true,
        message:"Enquiry Request Successfull",
        enquiry
     })
}


// delete enquiry
exports.deleteEnquiry=async(req,res,next)=>{
   
   const {id} = req.params;

   if(!id){
    return next(new ErrorHandler(401,"Enter the id feild"))
}


   const enquiry =await Enquiry.findById(id);

   if(!enquiry){
       return next(new ErrorHandler(401,"No Request Found with the id"))
   }

    await enquiry.deleteOne();

     res.status(200).json({
        success:true,
        message:"Enquiry Deleted Successfully",
     })
}


