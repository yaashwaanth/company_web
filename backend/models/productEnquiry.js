const mongoose = require("mongoose");

const schema = mongoose.Schema({

    mobileNumber:{
        type:Number,
        minLength:[10,"Please enter a valid number"],
        required:true

    },
    product:[{
        type:String,
        required:true
    }],
    status:{
        type:String,
        default:"pending"
    }

})

module.exports = mongoose.model("Enquiry",schema);