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

export const getBooks = async (req, res) => {
    try{
        const books = await Book.find({})

        return res.status(200).json(books)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const getBook = async (req, res) => {
    try{
        const {id} = req.params;
        const book = await Book.findById({_id: id})

        return res.status(200).json(book)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const updateBook = async (req, res) => {
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).json({message: "All fields are required"})
        }

        const {id} = req.params;
        const book = await Book.findByIdAndUpdate({_id: id}, req.body)

        if(!book){
            return res.status(404).json({message: "Invalid Id"})
        }

        return res.status(200).send({message: "Book updated successfully"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}