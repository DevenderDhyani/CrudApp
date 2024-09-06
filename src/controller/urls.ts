import { NextFunction, Request, Response } from "express"

import users from "../models/models"

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("working before getting data of request ")
        const { name, email, password } = req.body
        //check
        console.log("name : ", name)
        console.log("email : ", email)
        console.log("pass : ", password)
        console.log("working after getting data of request ")
        const newUser = new users({
            name: name,
            email: email,
            password: password
        })
        //send user a token
        console.log("users : ", newUser)
        await newUser.save()
        console.log("saved data successfully")
        res.json({
            returned: "Successfully"
        })

    } catch (err) {
        throw new Error("error is mine")
    }
}
