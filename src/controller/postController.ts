import { Request, Response } from "express"

import prisma from "./../prisma/index.ts"


export const profile = async (req: Request, res: Response) => {
    try {
        const { fullName, mobileNumber, email, dob1, gender } = req.body
        const dob = new Date(dob1)
        const user = await prisma.profile.create({
            data: { fullName, mobileNumber, dob, gender, email }
        })
        res.status(200).json({
            Message: "Profile created successfully",
            user
        })
    } catch (err) {
        throw new Error("Error accured while saving data for Profile!")
    }
}

export const address = async (req: Request, res: Response) => {
    try {
        const { fullName, mobileNumber, houseNo, sector, landmark, pincode, city, state, addressType } = req.body;
        const Aid = req.query.id as string;
        // if (typeof Uid !== 'string') {
        //     return res.status(400).json({ error: "Invalid user ID" });
        // }
        const data1 = await prisma.address.create({
            data: {
                fullName,
                mobileNumber,
                houseNo,
                sector,
                landmark,
                pincode,
                city,
                state,
                addressType,
                user: {
                    connect: { id: Aid } // Connect the address to the user with this userId
                }
            }
        });
        res.status(200).json({
            message: "Address Updated Successfully"
        })
    } catch (err) { console.log(err); throw new Error("Error accured while saving data for Address!") }
}

export const upAddress = async (req: Request, res: Response) => {
    const Aid = req.query.id as string
    const data1 = req.body
    if (data1) {
        console.log(data1)
        try {
            const data = await prisma.address.update({
                where: { id: Aid },
                data: {
                    fullName: data1.fullName,
                    mobileNumber: data1.mobileNumber,
                    houseNo: data1.houseNo,
                    sector: data1.sector,
                    landmark: data1.landmark,
                    pincode: data1.pincode,
                    city: data1.city,
                    state: data1.state,
                    addressType: data1.addressType
                },
            });
        } catch (err) {
            console.log(err)
            throw new Error()
        }
        // console.log(data)
        res.status(200).json({
            "data": "Success"
        })
    }
}

export const delProfile = async (req: Request, res: Response) => {
    const Aid = req.query.id as string
    const data1 = req.body
    console.log(data1)
    if (data1) {
        const data = await prisma.profile.delete({
            where: { id: Aid },
        });
        res.status(200).json({
            message: "User Deleted Successfully",
            data
        })
    }
    else {
        console.log("no data recieved in payload")
        throw new Error("Data1 is empty")
    }
}

export const delAddress = async (req: Request, res: Response) => {
    const Aid = req.query.id as string
    const data1 = req.body
    console.log(data1)
    if (data1) {
        console.log(data1)
        const data = await prisma.address.delete({
            where: { id: Aid },
        });
        console.log(data)
        res.status(200).json({
            data
        })
    }
    else {
        console.log("no data recieved in payload")
        throw new Error("Data1 is empty")
    }
}

export const upProfile = async (req: Request, res: Response) => {
    const Uid = req.query.id as string
    const data1 = req.body
    if (data1) {
        console.log(data1)
        const data = await prisma.profile.update({
            where: { id: Uid }, // Find the record by a unique identifier (e.g., id)
            data: {
                fullName: data1.fullName,
                mobileNumber: data1.mobileNumber,
                gender: data1.gender,
                email: data1.email,
                dob: data1.dob,
            },
        });
        console.log(data)
        res.status(200).json({
            data
        })
    }
}