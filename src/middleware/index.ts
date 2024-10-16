import { Request,Response,NextFunction } from "express";

export const validateToken = async(req:Request,res:Response,next:NextFunction) => {
    console.log("Token Varified")
    next()
}