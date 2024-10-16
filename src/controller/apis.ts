import { Request, Response } from "express"

// import users from "../models/models"
import prisma from "./../prisma/index.ts"





export const getProfile = async (req: Request, res: Response) => {
    try {
        const Uid = req.query.id
        if (typeof Uid !== 'string') {
            return res.status(400).json({ error: "Invalid user ID" });
        }

        const data = await prisma.profile.findUnique({
            where: { id: Uid }
            // include: { Address: true }
        })
        console.log(data)
        res.status(200).json({
            data
        })
    } catch (err) {
        console.log("getProfileError:", err)
    }
}
export const getAddress = async (req: Request, res: Response) => {
    try {
        const Uid = req.query.id as string
        const data = await prisma.profile.findUnique({
            where: { id: Uid },
            include: { Address: true }
        })
        console.log(data)
        res.status(200).json({
            address: data?.Address
        })
    } catch (err) {
        console.log("getProfileError:", err)
    }
}
