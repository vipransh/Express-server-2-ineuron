import asyncHandler from 'express-async-handler'
import {dummyBlogData} from '../DummyUserData/blogData.js'



export const getPost=asyncHandler(async(req,res)=>{
    res.status(201).json({
        success: true,
        dummyBlogData
})
})