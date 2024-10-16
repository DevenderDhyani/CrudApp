import { NextFunction, Request, Response } from "express"

// import users from "../models/models"
import prisma from "./../prisma/index.ts"

export const profile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { fullName,mobileNumber, email, dob1,gender } = req.body
        const dob = new Date(dob1)
        const user = await prisma.profile.create({
            data: {fullName,mobileNumber,dob,gender,email}
        })
        console.log("Profile created successfully")
    } catch (err) {throw new Error("Error accured while saving data for Profile!")}
}
export const address = async(req: Request, res: Response, next: NextFunction)=>{
    try{
        const id = req.query.id
        const { fullName, mobileNumber, houseNo, sector,landmark ,pincode ,city ,state ,addressType,userId } = req.body
        const data = await prisma.address.create({
            data: {fullName, mobileNumber, houseNo, sector,landmark ,pincode ,city ,state ,addressType,userId}
            user: {
                connect: { id: id }
            }
        })
        console.log("Address added successfully")
    }catch(err) {throw new Error("Error accured while saving data for Address!")}
}