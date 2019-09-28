var fetch = require('node-fetch');
var _fs = require("fs");

var obj = {
    books: []
};

fetch("https://www.googleapis.com/books/v1/volumes?q=adventure")
    .then(function (resp) {
        return resp.json();
    }).then(function (data) {
        for (let i = 0; i < 10; i++) {
            obj.books.push({
                title: data.items[i].volumeInfo.title,
                author: data.items[i].volumeInfo.authors,
                rating: data.items[i].volumeInfo.averageRating,
                pages: data.items[i].volumeInfo.pageCount,
                description: data.items[i].volumeInfo.description,
                image: data.items[i].volumeInfo.imageLinks.thumbnail
            });
        }
        let json = JSON.stringify(obj, null, 2);
        console.log(json);
        _fs.writeFileSync("books.json", json, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });
