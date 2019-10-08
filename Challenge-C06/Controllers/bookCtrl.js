'use strict'

var Book = require('../Models/bookModel');

function getBook(req, res) {//Function to get information of a book
    const query = req.query;

    Book.findOne(query, (err, book) => {
        if (err) {
            res.status(500).send({ message: "ERROR: Getting book" });
        } else {
            if (!book) {
                res.status(404).send({ message: "The book doesnt exist" });
            } else {
                res.status(200).send({ book });
            }
        }
    });
}

function getAllBooks(req, res) {//Function to get information of all books
    const query = req.query;

    Book.find(query, (err,books) => {
        if (err) {
            res.status(500).send({ message: "ERROR: Getting book" });
        } else {
            if (!books) {
                res.status(404).send({ message: "The book doesnt exist" });
            } else {
                res.status(200).send({ books });
            }
        }
    });
}

function lendBook(req,res){//Function to lend books
var params = req.body;

var title= params.title;
var city = params.city;

Book.findOne({title: title}, (err, book) => {
    if (err) {
        res.status(500).send({ message: "ERROR: Getting book" });
    } else {
        if (!book) {
            res.status(404).send({ message: "The book doesnt exist" });
        } else {
            if(book.city == "None"){
                res.status(200).send({mssagge: "This book is only avaible in digital format you can download it"});
            }else{
                if(book.city != city){
                    res.status(204).send({ message: "The book is not avaible in this city" });
                    
                }else{
                    if(!book.state){
                        res.status(204).send({ message: "The book is not avaible right now" });
                    }else{
                        res.status(200).send({message:"You can lend the book", book });
                        book.state = false;
                        book.save();
                        
                    }
                    
                }
    
            }

           
            
        }
    }
});



}


module.exports = {
    getBook,
    getAllBooks,
    lendBook
};

