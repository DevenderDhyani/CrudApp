

import express from 'express'
const app = express()
import mongoose from "./db/connection2";
import rout from "./routes/router";



app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });


app.use("/dev", rout)

app.listen(3000, () => {
    console.log("app is running on //localhost:3000")
})






// import passport from "passport";
// import { Strategy as LocalStrategy } from "passport-local";
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// passport.use(new LocalStrategy(
//     async (username, password, done) => {
//         //Replace with your user lookup and verification logic
//         const user = await findUserByUsername(username);
//         if (!user || !(await bcrypt.compare(password, user.password))) {
//             return done(null, false, { message: 'Incorrect credentials.' });
//         }
//         return done(null, user);
//     }
// ));