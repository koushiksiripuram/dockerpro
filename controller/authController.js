const User = require("../models/userModel")
const bcrypt=require("bcrypt")
exports.signUp = async(req , res)=>{
    const {username,password}=req.body;
        const hashpassword=await bcrypt.hash(password,12);
        
    try{
        const newUser =await User.create({
            username,
            password: hashpassword,
        });
        
        res.status(200).json({
            status:"success",
            data:{
                user: newUser
            }
        })
    }catch (e){
        res.status(404).json({
            status:"Fail",
        });
    }
};

exports.login = async(req , res)=>{
    const {username,password}=req.body;
        
    try{
        const user=await User.findOne({username})
        console.log("here please")

        if(!user){
            return res.status(404).json({
                status:"fail",
                message:"user not found",
            })
        }

        const isCorrect =await bcrypt.compare(password,user.password)

        if(isCorrect){
            req.session.user =user._id.toJSON();
            res.status(200).json({
            status:"success",
            data:{
                user: user
            }
        })
        }
        else{
            res.status(400).json({
                status:"fail",
                message:"incorrect username or password"
            })
        }
       
    } catch (e){

        res.status(404).json({
            status:"Fail",
            message:"outer try cache failed",
        });
    }
};