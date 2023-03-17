// This is the structure for product details

const mongoose = require("mongoose");

const schema = new mongoose.Schema({

    product_name:{
        type:String,
        required:[true,"Please Enter The Product Name"]
    },

    images:[
       {
           public_id :{
               type:String,
               required:true,
           },
           url:{
               type:String,
               required:true,
           }
       }
    ],

    product_videos:[
        {
                public_id:{
                    type:String,
                    required:true,
                },
                url:{
                    type:String,
                    required:true
                }
            
        }
    ],

    product_powerSource:{
        type:String,
        require:[true,"Please Enter The Product Power Source"]
    },

    product_motorCapacity:{
        type:String,
        require:[true,"Please Enter the Product Motor Capacity"]
    },

    product_weight:{
        type:String,
        require:[true,"Please Enter The product Weight"]
    },

    product_chainSpeed:{
        type:String,
        require:[true,"Please Enter the Product Chain Speed"]
    },

    product_batteryCapacity:{
        type:String,
        require:[true,"Please Enter the Product Battery Capacity"]
    },

    views:{
        type:Number,
        default:0
    },

    productsSold:{
        type:Number,
        default:1
    },

    extensions:{
        type:String,
        default:"No"
    },
   

    createdAt:{
        type:Date,
        default:Date.now
    },


})

module.exports = mongoose.model("Product",schema);


