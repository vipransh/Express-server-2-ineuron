import asyncHandler from 'express-async-handler'
import { userList, getJwtToken } from '../DummyUserData/users.js'



const cookieOptions = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
}

export const login=asyncHandler(async(req,res)=>{
    const {username,password}=req.body

    if(!(username && password)){
        throw new Error("All feilds are required")
    }
    
    let isPasswordMatch=false
    let userId=""
    userList.forEach(data=>{
        if(data.user_Name===username && data.password===password){
            isPasswordMatch=true
            userId=data.id
        }
    })

    if(!isPasswordMatch){
        throw new Error("Invalid username or password")
    }

    if(isPasswordMatch){
        const token=getJwtToken(userId)
        res.cookie("token",token, cookieOptions)
        res.status(201).json({
            success: true,
            token,
        })
    }

})


