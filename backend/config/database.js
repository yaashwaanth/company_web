// This the database for the website
// Cloudinary is used to store images and videos in the website

const mongoose = require("mongoose");

const connectDatabase = () =>{
    mongoose.connect(process.env.MONGO_URI).then(c=>{
        console.log(`Mongodb Connected to:${c.connection.host}`)
    }).catch(error=>{
        console.log(error);
    })
}

module.exports = connectDatabase;