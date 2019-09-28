
var obj = {
    books: []
};

fetch("./assets/js/books.json")
    .then((resp) => resp.json())
    .then(function (data) {
        for (var i = 0; i < 10; i++) {
            obj.books.push({
                title: data.books[i].title,
                author: data.books[i].author,
                rating: data.books[i].rating,
                pages: data.books[i].pages,
                description: data.books[i].description,
                image: data.books[i].image
            });
        }

        var image = document.getElementsByClassName("libro");
        var title = document.getElementsByClassName("titleC");
        var author = document.getElementsByTagName("span");
        var page = document.getElementsByClassName("pagesC");
        var description = document.getElementsByTagName("article");
        var coverTitle = document.getElementsByClassName("title");
        var coverAuthor = document.getElementsByClassName("auth");
        var ratingStars = document.getElementsByClassName("ratingStars");
        var rate = document.getElementsByClassName("rate");
        var starsRating = document.getElementsByClassName("star-rating");

        for (var i = 0; i < 10; i++) {
            title[i].innerHTML = obj.books[i].title;
            author[i].innerHTML = obj.books[i].author;
            page[i].innerHTML = obj.books[i].pages + " pages";
            description[i].innerHTML = obj.books[i].description;
            coverTitle[i].innerHTML = obj.books[i].title;
            coverAuthor[i].innerHTML = obj.books[i].author;
            image[i].src = obj.books[i].image;
            ratingStars[i].innerHTML = getStars(obj.books[i].rating, 2);
            rate[i].innerHTML = getStars(obj.books[i].rating, 1);
            starsRating[i].innerHTML = getStars(obj.books[i].rating,1);
        }
    });


function getStars(rating, number) {

    if (rating == undefined) {
        rating = 0;
    }

    let starIcon;
    const ratingNumber = Math.floor(Number(rating));


    if (number == 1) {

        for (let i = 0; i < ratingNumber; i += 1) {
            starIcon ? (starIcon += '<i class="fas fa-star"></i>\n') : (starIcon = '<i class="fas fa-star"></i>\n');
        }
        if (ratingNumber !== 5) {
            for (let i = 0; i < (5 - ratingNumber); i += 1) {
                starIcon ? starIcon += '<i class="far fa-star"></i>\n' : starIcon = '<i class="far fa-star"></i>\n';
            }
        }
    } else {

        for (let i = 0; i < ratingNumber; i += 1) {
            starIcon ? (starIcon += '<i class="fas fa-star stars"></i>\n') : (starIcon = '<i class="fas fa-star stars"></i>\n');
        }
        if (ratingNumber !== 5) {
            for (let i = 0; i < (5 - ratingNumber); i += 1) {
                starIcon ? starIcon += '<i class="far fa-star stars"></i>\n' : starIcon = '<i class="far fa-star stars"></i>\n';
            }
        }

    }
    return starIcon;
}