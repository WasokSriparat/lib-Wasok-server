const Book = require('../models/bookModel');

exports.getBooks = async (req, res) => {

    Book.find()
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.getBookById = async (req, res) => {

    Book.findById(req.params.id)
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.getBookByName = async (req, res) => {

    Book.find({name:{
        $regex: new RegExp(req.params.name),
        $options: 'i'
    }})
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.addBook = async (req,res) =>{

    try {

        let book = new Book({

            bookId: req.body.bookId,
            name: req.body.name,
            author: req.body.author,
            publicher: req.body.publicher,
            price: req.body.price,
            stdCanBorrow: req.body.stdCanBorrow,
            tecCanBorrow: req.body.tecCanBorrow,
            status: "ว่าง",
        });
        let createBook = await book.save();

        res.status(200).json({
            msg: "Add Book OK",
            data: createBook
        });

        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({
            error: error
        });

    }

}

exports.updateBook = async (req,res)=>{
    let book = {
        name: req.body.name,
        author: req.body.author,
        publicher: req.body.publicher,
        price: req.body.price,
        stdCanBorrow: req.body.stdCanBorrow,
        tecCanBorrow: req.body.tecCanBorrow
    };
    Book.findByIdAndUpdate(req.params.id,book)
    .exec((err,data)=>{
        Book.findById(req.params.id)
        .exec((err,data)=>{
            res.status(200).json({
                msg: "OK",
                data: data
            });
        });
    });
};

exports.deleteBook = async (req, res) => {
    Book.findByIdAndDelete(req.params.id)        //find product by id, then delete
        .exec((err)=>{
            if(err){
                res.status(500).json({
                    msg: err
                });
            } else{
                res.status(200).json({
                    msg: "Delete complete"
                });
            }
        });
};
