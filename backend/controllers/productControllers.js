const Product = require("../models/Products");
const cloudinary = require("cloudinary");
const getDataUri = require("../Utils/dataUri");
const ErrorHandler = require("../Utils/errorHandler");
const catchAsyncErrors = require("..//middleware/catchAsyncErrors");


// create new product.
// exports.createProduct = async(req,res,next) =>{
   
//     const {product_name,
//            product_powerSource,
//            product_motorCapacity,
//            product_weight,
//         } =req.body;
    
//        // poster
//        const file = req.file;
//        const fileUri=getDataUri(file);
//        console.log(typeof file);

//        const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

//     //    console.log(typeof fileUri.content);  // string
//        const product=await Product.create({
//            product_name,
//           product_powerSource,
//           product_motorCapacity,
//           product_weight,
//           poster:{
//                public_id:mycloud.public_id, // cloudinary sa melaga
//                url:mycloud.secure_url
//            }

//     });
    
//    res.status(200).json({
//        success:true,
//        message:'Product Succesfull Created',
//        product
//    })
// }


// exports.createProduct = catchAsyncErrors(async(req,res,next)=>{
//     let images=[...req.body.images];
//     let imageBuffer=[];
    
//     for(let i=0;i<images.length;i++){
//     const mycloud = await cloudinary.v2.uploader.upload(images[i]);
//     imageBuffer.push({
//         public_id:mycloud.public_id,
//         url:mycloud.secure_url

//     })

//     }
//     req.body.images=imageBuffer;
//     console.log(req.body);

//     const product = await Product.create(req.body);

//     res.status(200).json({
//         success:true,
//         message:"Product created successfully",
//         product
//     })
   
    
// })

// Delete Product

exports.deleteProduct =async(req,res,next)=>{
    let product = await Product.findById(req.params.id);
   
    if(!product){
        return next(new ErrorHandler(200,"Product Not found"));
    }
  
    for (let i = 0; i < product.images.length; i++) {
        await cloudinary.v2.uploader.destroy(product.images[i]);
    }
    for (let i = 0; i < product.product_videos.length; i++) {
        await cloudinary.v2.uploader.destroy(product.product_videos[i]);
    }
    await product.deleteOne()
    res.status(200).json({
        success:true,
        message:"Product Deleted",
    })

};

// show details of product

exports.showDetails = async(req,res,next) =>{

    const {id} = req.params;

    const product = await Product.findById(id);

  

   res.status(200).json({
       success:true,
       product
   })
}

// show all details

exports.showAllProducts = async(req,res,next) =>{

    

    const products = await Product.find();
   

    if(!products){
        console.log('No products created');
    }
   res.status(200).json({
       success:true,
       products
   })
}


// upload product videos
exports.addProductVideo=async(req,res,next)=>{

    const {id} = req.params;

    const product = await Product.findById(id);

    if(!product){
        return next(new ErrorHandler (404,"Product not found"));
    }

     const file = req.file;
     const fileUri = getDataUri(file);
     const mycloud = await cloudinary.v2.uploader.upload(fileUri.content,{
         resource_type:"video",
     })


   // upload file here
   product.product_videos.push({
       video:{
           public_id:mycloud.public_id,
           url:mycloud.secure_url,
       }
   })
  
    await product.save();
    res.status(200).json({
        success:true,
        message:"Video Added Successfully"
    })
}


// Delete video
exports.deleteVideo=async(req,res,next)=>{

    const {productId,videoId} = req.query;
  
    const product = await Product.findById(productId);
     if(!product){
         return next(new ErrorHandler(404,"Product not found"));
     }
  
     const video = product.product_videos.find((item)=>{
         if(item._id.toString()=== videoId.toString()){
             return item;
         }
     })
     await cloudinary.v2.uploader.destroy(video.product_videos.public_id,{
         resource_type:"video"
     });
  
     product.product_videos = product.product_videos.filter((item)=>{
         if(item._id.toString()!==videoId.toString()){
             return item;
         }
     })
  
     await product.save();
  
  
      res.status(201).json({
          success:true,
          message:"Video Deleted successfully.",
      })
  }




  // create product with images and videos
  exports.createProduct = catchAsyncErrors(async(req,res,next)=>{
    let images=[...req.body.images];
    let videos=[...req.body.product_videos];
    let imageBuffer=[];
    let imageBuffer2=[];
    
    for(let i=0;i<images.length;i++){
    const mycloud = await cloudinary.v2.uploader.upload(images[i]);
    imageBuffer.push({
        public_id:mycloud.public_id,
        url:mycloud.secure_url

    })

    for(let i=0;i<videos.length;i++){
    const mycloud = await cloudinary.v2.uploader.upload(videos[i],{
        resource_type:"video"
    });
    imageBuffer2.push({
        public_id:mycloud.public_id,
        url:mycloud.secure_url

    })

    }
    req.body.images=imageBuffer;
    req.body.product_videos=imageBuffer2;
    console.log(req.body);

    const product = await Product.create(req.body);

    res.status(200).json({
        success:true,
        message:"Product created successfully",
        product
    })
   
    
}})