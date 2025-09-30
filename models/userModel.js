const mongoose= require("mongoose")

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        require:[true,"must have one"],
        unique: true,
    },
    password:{
        type:String,
        require:[true,"should"],
    }
});

const User=mongoose.model("User",userSchema);

module.exports = User;