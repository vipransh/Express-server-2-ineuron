import JWT from "jsonwebtoken";
import asyncHandler from 'express-async-handler'
import config from "../config/envConfig.js";
import { userList } from "../DummyUserData/users.js";

export const isLoggedIn=asyncHandler(async(req,res,next)=>{
    let token;

    if(req.cookies.token || (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))){
        token=req.cookies.token || req.headers.authorization.split(" ")[1]
    }

    if(!token){
        res.status(400).json({
            success: false,
            message: "Unauthorized to access this route"
        })
    }

    try {
        const decodedJwtToken=JWT.verify(token,config.JWT_SECRET)
        res.user=userList.filter(data=> data.id===decodedJwtToken.id)
        next();
    } catch (error) {
        console.log(error.message);
    }
})