import express from 'express'
const app = express()
import postRout from "./routes/postRoutes.ts"
import apiRout from "./routes/apiRoutes.ts";
import dotenv from 'dotenv'

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/user", postRout)
app.use("/user/api", apiRout)

app.listen(5000, () => {
    console.log("app is running on //localhost:5000")
})
