 import UserModel from "./user.model.js";
 import bcrypt from "bcrypt";
 import jwt from "jsonwebtoken";


 const createtoken = async (user) =>{

    const payload ={

        id :user._id,
        fullname : user.fullname,
        role: user.role,
        email :user.email,

    }

    const token = await jwt.sign(payload,process.env.AUTH_SECRET,{expiresIn:"1d"});
    return token;

 }
 
 export const createUser = async(req,res) =>{
try{
    const data = req.body;
    const user = new UserModel(data);
    await user.save();
    res.json(user);
      
}catch(err){
    res.status(500).json({message : err.message});
}

 }

  export const login = async(req,res) =>{
try{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email});
    if(!user)
        return res.status(404).json({message: "User not Found !"});
    const isloged = await  bcrypt.compare(password,user.password);
    if(!isloged){
    return res.status(401).json({message:"wrong password !"});
    }

   const token = await createtoken(user);
   res.cookie("authToken",token,{
     maxAge : 60*60*24*1000,
     domain: process.env.ENVIRONMENT === "DEV" ? "localhost" : process.env.DOMAIN,
     secure : process.env.ENVIRONMENT ==="DEV" ? false:true ,
     httpOnly :true,
       });
       res.json({message :"Login sucess"});

    
      
}catch(err){
    res.status(500).json({message : err.message});
}

 }