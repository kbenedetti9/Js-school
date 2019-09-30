
import fetch from "node-fetch";

function clickBook() {/*Function to show complete information when a book is clicked*/
    var textOverImages = document.getElementsByClassName("onClickTextOverImage");
    var previousTextOverImage;
    for (var i = 0; i < textOverImages.length; i++) {
        textOverImages[i].onclick = function () {
            var classes = this.classList;
            if (classes.contains("show")) {
                classes.remove("show");
            } else {
                if (previousTextOverImage != null)
                    previousTextOverImage.classList.remove("show");
                previousTextOverImage = this;
                classes.add("show");
            }
        }
    }
}

var obj = {/*Object to obtain json information*/
    books: []
};
 
fetch("./assets/js/books.json")/*Fetch to obtain json of books information */
    .then((resp) => resp.json())
    .then(function (data) {
        for (var i = 0; i < 10; i++) {
            obj.books.push({/*Pushing info in object*/
                title: data.books[i].title,
                author: data.books[i].author,
                rating: data.books[i].rating,
                pages: data.books[i].pages,
                description: data.books[i].description,
                image: data.books[i].image
            });
        }

        const bookContainer = document.getElementsByClassName("books");

        for (var i = 0; i < 5; i++) {

            const book = `<div class="bookContainer col-lg-2 col-sm-2 container">
                <div class="row">
                    <div class="col-lg-12 bookImage">
                        <div class="cover onClickTextOverImage myCover">
                            <img class="coverPage" src="${obj.books[i].image}"/>
                            <div class="back">
                                <div>
                                    <img class="heart"
                                        src="assets/img/heart.png">
                                    <img class="bookMark" src="assets/img/bookmark.png">
                                    <img class="bookOpen" src="assets/img/book-open.png">
                                </div>
                                <p class="rating">RATE THIS BOOK</p>
                                <div class="ratingStars">
                                ${getStars(obj.books[i].rating, 2)}
                                </div>
                                <i class="fas fa-caret-left arrow"></i>
                                <div class="bookCompleteInfo">
                                    <p class="titleC" style="margin:1% 0;">${obj.books[i].title}</p>
                                    <p class="authC" style="margin:1% 0;">Novel by
                                        <span id="color-word">${obj.books[i].author}</span></p>
                                    <p class="pagesC" style="margin:2% 0;"></p>
                                    <p class="itemTitle">SUMMARY</p>
                                    <article style="margin:-1% 0;">
                                    <p>
                                    ${obj.books[i].description}
                                    </p>
                                    </article>
                                    <p class="itemTitle" style="margin:1% 0;">RATING</p>
                                    <div class="star-rating">
                                    ${getStars(obj.books[i].rating, 1)}
                                    </div>
                                    <p style="margin:6% 0;"></p>
                                    <p class="recommend" style="margin:1% 0;">RECOMMENDED BY</p>
                                    <div class="recommended">
                                        <img src="assets/img/user3.png">
                                        <img src="assets/img/user2.png">
                                        <img src="assets/img/user.png">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row container">
                    <div class="bookInfo">
                        <h6 class="title container">${obj.books[i].title}</h6>
                        <p class="auth container" style="margin:-2.5% 0;">${obj.books[i].author}</p>
                        <div class="container rate">
                        ${getStars(obj.books[i].rating, 1)}
                        </div>
                    </div>
                </div>
            </div> `;

            bookContainer[0].innerHTML += book;
            clickBook();

        }

        for (var i = 5; i < 10; i++) {


            const book = `<div class="bookContainer col-lg-2 col-sm-2 container">
            <div class="row">
                <div class="col-lg-12 bookImage">
                    <div class="cover onClickTextOverImage myCover">
                        <img class="coverPage" src="${obj.books[i].image}"/>
                        <div class="back">
                            <div>
                                <img class="heart"
                                    src="assets/img/heart.png">
                                <img class="bookMark" src="assets/img/bookmark.png">
                                <img class="bookOpen" src="assets/img/book-open.png">
                            </div>
                            <p class="rating">RATE THIS BOOK</p>
                            <div class="ratingStars">
                            ${getStars(obj.books[i].rating, 2)}
                            </div>
                            <i class="fas fa-caret-left arrow"></i>
                            <div class="bookCompleteInfo second">
                                <p class="titleC" style="margin:1% 0;">${obj.books[i].title}</p>
                                <p class="authC" style="margin:1% 0;">Novel by
                                    <span id="color-word">${obj.books[i].author}</span></p>
                                <p class="pagesC" style="margin:2% 0;"></p>
                                <p class="itemTitle">SUMMARY</p>
                                <article style="margin:-1% 0;">
                                <p>
                                ${obj.books[i].description}
                                </p>
                                </article>
                                <p class="itemTitle" style="margin:1% 0;">RATING</p>
                                <div class="star-rating">
                                ${getStars(obj.books[i].rating, 1)}
                                </div>
                                <p style="margin:6% 0;"></p>
                                <p class="recommend" style="margin:1% 0;">RECOMMENDED BY</p>
                                <div class="recommended">
                                    <img src="assets/img/user3.png">
                                    <img src="assets/img/user2.png">
                                    <img src="assets/img/user.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row container">
                <div class="bookInfo">
                    <h6 class="title container">${obj.books[i].title}</h6>
                    <p class="auth container" style="margin:-2.5% 0;">${obj.books[i].author}</p>
                    <div class="container rate">
                    ${getStars(obj.books[i].rating, 1)}
                    </div>
                </div>
            </div>
        </div> `;

            bookContainer[1].innerHTML += book;
            clickBook();

        }
    });



function getStars(rating, number) {/*Function to get the stars icon*/

    if (rating == undefined) {/*If rating is undefined*/
        rating = 0;
    }

    let stars;
    var ratingNumber = Math.trunc(Number(rating));

    if (number == 1) {/*If the stars are blue*/

        for (var i = 0; i < ratingNumber; i++) {
            stars ?
                (stars += '<i class="fas fa-star"></i>\n')
                :
                (stars = '<i class="fas fa-star"></i>\n');
        }

        if (ratingNumber !== 5) {
            for (var i = 0; i < (5 - ratingNumber); i++) {
                stars
                    ?
                    stars += '<i class="far fa-star"></i>\n'
                    :
                    stars = '<i class="far fa-star"></i>\n';
            }
        }
    } else {/*If the stars are yellow*/

        for (var i = 0; i < ratingNumber; i++) {
            stars
                ?
                (stars += '<i class="fas fa-star stars"></i>\n')
                :
                (stars = '<i class="fas fa-star stars"></i>\n');
        }

        if (ratingNumber !== 5) {
            for (var i = 0; i < (5 - ratingNumber); i++) {
                stars
                    ?
                    stars += '<i class="far fa-star stars"></i>\n'
                    :
                    stars = '<i class="far fa-star stars"></i>\n';
            }
        }

    }
    return stars;

}