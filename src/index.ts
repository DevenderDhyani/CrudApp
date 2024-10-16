import express from 'express'
const app = express()
import rout from "./routes/router.ts";

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/user", rout)

app.listen(5000, () => {
    console.log("app is running on //localhost:3000")
})
