var fetch = require('node-fetch');/*Importing fetch */
var _fs = require("fs");/*Importing file system module*/

var obj = {
    books: []
};

fetch("https://www.googleapis.com/books/v1/volumes?q=adventure")/*Fetch to consume API to obtain adventure books information */
    .then(function (resp) {
        return resp.json();
    }).then(function (data) {
        console.log(data);
        for (let i = 0; i < 10; i++) {
            obj.books.push({/*Pushing info into the object*/
                title: data.items[i].volumeInfo.title,
                author: data.items[i].volumeInfo.authors,
                rating: data.items[i].volumeInfo.averageRating,
                pages: data.items[i].volumeInfo.pageCount,
                description: data.items[i].volumeInfo.description,
                image: data.items[i].volumeInfo.imageLinks.thumbnail,
                isbn: data.items[i].volumeInfo.industryIdentifiers,
                date: data.items[i].volumeInfo.publishedDate,
                id: data.items[i].id
            });
        }
        let json = JSON.stringify(obj, null, 2);
        
        _fs.writeFileSync("books.json", json, function (err) {/*Creating and writing a new json file with the info*/
            if (err) throw err;
            console.log('Saved!');
        });
    });
