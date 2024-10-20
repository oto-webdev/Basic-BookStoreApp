import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to database")
    app.listen(port, () => {
        console.log("Server started")
    })
}).catch((error)=>{
    console.log(error)
    process.exit(1)
})