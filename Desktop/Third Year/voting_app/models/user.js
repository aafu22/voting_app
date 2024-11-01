const mongoose = require('mongoose');

//Define the User schema 

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
        },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    aadharCardNumber:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['voter','admin'],
        default:false
    },
    isVoted:{
        type:Boolean,
        default:false 
    }
       
});

//Create user model

const user = mongoose.model('user',userSchema);
module.exports = user;