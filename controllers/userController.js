const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signupuser = async function(req, res){
    const { name, email, password } = req.body;

    const existing = await User.findOne({email});
    if(existing)
    {
        res.status(411).json({
            msg : "User Already exists"});
    }
    const hashed_password = await bcrypt.hash(password, 10);
    const user = await User.create({name,email,password:hashed_password});

    res.status(201).json({
        msg : "User Created Successfully"
    })
}  

exports.loginuser = async (req,res) =>{
     const {email,password} = req.body;
     const existing = await User.findOne({email});
     if(!existing)
     {
        res.status(411).json({
            msg : "Email does not exist! Create New Acccount"
        })
     }
     const password_match = await bcrypt.compare(password,existing.password);
     if(password_match)
     {
        const token = jwt.sign({id : existing._id}, process.env.JWT_SECRET,{ expiresIn : "1d"});
        res.status(200).json({
            token
        })
     }
     res.status(411).json({
        msg : "Invalid Password for email"
     })
}