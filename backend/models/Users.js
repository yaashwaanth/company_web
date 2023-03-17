const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const schema = new mongoose.Schema({
    name:String,

    password:{
        type:String,
        required:true,
        select:false
    },

    email:{
        type:String,
        unique:[true,"Email is alredy registred"],
        required:[true,"Please enter the password"]
    }
})

// compare password logic
schema.methods.comparePassword = async function(password){
        return await this.password === password;
}

// creating token for cookie
schema.methods.getJwtToken =  function(){
    
     return  jwt.sign({_id:this._id.toString()},process.env.JWT_SECRET,{
         expiresIn:'15d'
     })
}



module.exports = mongoose.model("User",schema);