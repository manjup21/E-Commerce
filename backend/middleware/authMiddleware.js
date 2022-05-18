import expressAsyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect=asyncHandler(async(req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(' ')[1]
            const decode=jwt.verify(token,process.env.JWT_SECRET)
            req.user=await User.findById(decode.id).select('-password')

            next()
        }
        catch (error){
            console.error(error)
            req.status(401)
            throw new Error('Not authorized, token failed')
        }
    }
    if(!token){
        throw new Error('Not authorized No Token')
    }
    
})

export {protect}