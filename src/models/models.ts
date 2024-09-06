import mongoose from "../db/connection2"
// import { Schema } from "mongoose"
const schema = mongoose.Schema
const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { collection: "User" })

const users = mongoose.model("users", userSchema)

export default users