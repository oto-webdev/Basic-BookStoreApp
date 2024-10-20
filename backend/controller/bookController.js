import Book from '../models/bookModel.js'

export const createBook = async (req, res) => {
    try{
        if(
            !req.body.title,
            !req.body.author,
            !req.body.publishYear
        ){
            return res.status(400).json({message: "All fields are required"})
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }

        const book = await Book.create(newBook)
        res.status(201).send(book)
    }catch(error){
        res.status(500).json({message: error.message})
    }
} 