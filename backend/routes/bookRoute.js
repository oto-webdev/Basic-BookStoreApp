import express from 'express'
import { createBook, getBook, getBooks, updateBook } from '../controller/bookController.js'

const router = express.Router()

router.post("/", createBook)
router.get("/", getBooks)
router.get("/:id", getBook)
router.put("/:id", updateBook)

export default router;