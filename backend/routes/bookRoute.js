import express from 'express'
import { createBook, deleteBook, getBook, getBooks, updateBook } from '../controller/bookController.js'

const router = express.Router()

router.post("/", createBook)
router.get("/", getBooks)
router.get("/:id", getBook)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)

export default router;