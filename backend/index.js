import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log("Server started")
})