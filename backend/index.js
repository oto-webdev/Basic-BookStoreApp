import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import bookRouter from './routes/bookRoute.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cors({
    origin: 'localhost:4000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}))
app.use("/api/books", bookRouter)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to database")
    app.listen(port, () => {
        console.log("Server started")
    })
}).catch((error)=>{
    console.log(error)
    process.exit(1)
})