(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function clickBook() {
  /*Function to show complete information when a book is clicked*/
  var textOverImages = document.getElementsByClassName("onClickTextOverImage");
  var previousTextOverImage;

  for (var i = 0; i < textOverImages.length; i++) {
    textOverImages[i].onclick = function () {
      var classes = this.classList;

      if (classes.contains("show")) {
        classes.remove("show");
      } else {
        if (previousTextOverImage != null) previousTextOverImage.classList.remove("show");
        previousTextOverImage = this;
        classes.add("show");
      }
    };
  }
}

var obj = {
  /*Object to obtain json information*/
  books: []
};
(0, _nodeFetch["default"])("./assets/js/books.json")
/*Fetch to obtain json of books information */
.then(function (resp) {
  return resp.json();
}).then(function (data) {
  for (var i = 0; i < 10; i++) {
    obj.books.push({
      /*Pushing info in object*/
      title: data.books[i].title,
      author: data.books[i].author,
      rating: data.books[i].rating,
      pages: data.books[i].pages,
      description: data.books[i].description,
      image: data.books[i].image
    });
  }

  var bookContainer = document.getElementsByClassName("books");

  for (var i = 0; i < 5; i++) {
    var book = "<div class=\"bookContainer col-lg-2 col-sm-2 container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 bookImage\">\n                        <div class=\"cover onClickTextOverImage myCover\">\n                            <img class=\"coverPage\" src=\"".concat(obj.books[i].image, "\"/>\n                            <div class=\"back\">\n                                <div>\n                                    <img onclick=\"stopPropagation(event)\" class=\"heart\"\n                                        src=\"assets/img/heart.png\">\n                                    <img class=\"bookMark\" src=\"assets/img/bookmark.png\">\n                                    <img class=\"bookOpen\" src=\"assets/img/book-open.png\">\n                                </div>\n                                <p class=\"rating\">RATE THIS BOOK</p>\n                                <div class=\"ratingStars\">\n                                ").concat(getStars(obj.books[i].rating, 2), "\n                                </div>\n                                <i class=\"fas fa-caret-left arrow\"></i>\n                                <div class=\"bookCompleteInfo\">\n                                    <p class=\"titleC\" style=\"margin:1% 0;\">").concat(obj.books[i].title, "</p>\n                                    <p class=\"authC\" style=\"margin:1% 0;\">Novel by\n                                        <span id=\"color-word\">").concat(obj.books[i].author, "</span></p>\n                                    <p class=\"pagesC\" style=\"margin:2% 0;\"></p>\n                                    <p class=\"itemTitle\">SUMMARY</p>\n                                    <article style=\"margin:-1% 0;\">\n                                    <p>\n                                    ").concat(obj.books[i].description, "\n                                    </p>\n                                    </article>\n                                    <p class=\"itemTitle\" style=\"margin:1% 0;\">RATING</p>\n                                    <div class=\"star-rating\">\n                                    ").concat(getStars(obj.books[i].rating, 1), "\n                                    </div>\n                                    <p style=\"margin:6% 0;\"></p>\n                                    <p class=\"recommend\" style=\"margin:1% 0;\">RECOMMENDED BY</p>\n                                    <div class=\"recommended\">\n                                        <img src=\"assets/img/user3.png\">\n                                        <img src=\"assets/img/user2.png\">\n                                        <img src=\"assets/img/user.png\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row container\">\n                    <div class=\"bookInfo\">\n                        <h6 class=\"title container\">").concat(obj.books[i].title, "</h6>\n                        <p class=\"auth container\" style=\"margin:-2.5% 0;\">").concat(obj.books[i].author, "</p>\n                        <div class=\"container rate\">\n                        ").concat(getStars(obj.books[i].rating, 1), "\n                        </div>\n                    </div>\n                </div>\n            </div> ");
    bookContainer[0].innerHTML += book;
    clickBook();
  }

  for (var i = 5; i < 10; i++) {
    var _book = "<div class=\"bookContainer col-lg-2 col-sm-2 container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 bookImage\">\n                    <div class=\"cover onClickTextOverImage myCover\">\n                        <img class=\"coverPage\" src=\"".concat(obj.books[i].image, "\"/>\n                        <div class=\"back\">\n                            <div>\n                                <img onclick=\"stopPropagation(event)\" class=\"heart\"\n                                    src=\"assets/img/heart.png\">\n                                <img class=\"bookMark\" src=\"assets/img/bookmark.png\">\n                                <img class=\"bookOpen\" src=\"assets/img/book-open.png\">\n                            </div>\n                            <p class=\"rating\">RATE THIS BOOK</p>\n                            <div class=\"ratingStars\">\n                            ").concat(getStars(obj.books[i].rating, 2), "\n                            </div>\n                            <i class=\"fas fa-caret-left arrow\"></i>\n                            <div class=\"bookCompleteInfo second\">\n                                <p class=\"titleC\" style=\"margin:1% 0;\">").concat(obj.books[i].title, "</p>\n                                <p class=\"authC\" style=\"margin:1% 0;\">Novel by\n                                    <span id=\"color-word\">").concat(obj.books[i].author, "</span></p>\n                                <p class=\"pagesC\" style=\"margin:2% 0;\"></p>\n                                <p class=\"itemTitle\">SUMMARY</p>\n                                <article style=\"margin:-1% 0;\">\n                                <p>\n                                ").concat(obj.books[i].description, "\n                                </p>\n                                </article>\n                                <p class=\"itemTitle\" style=\"margin:1% 0;\">RATING</p>\n                                <div class=\"star-rating\">\n                                ").concat(getStars(obj.books[i].rating, 1), "\n                                </div>\n                                <p style=\"margin:6% 0;\"></p>\n                                <p class=\"recommend\" style=\"margin:1% 0;\">RECOMMENDED BY</p>\n                                <div class=\"recommended\">\n                                    <img src=\"assets/img/user3.png\">\n                                    <img src=\"assets/img/user2.png\">\n                                    <img src=\"assets/img/user.png\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row container\">\n                <div class=\"bookInfo\">\n                    <h6 class=\"title container\">").concat(obj.books[i].title, "</h6>\n                    <p class=\"auth container\" style=\"margin:-2.5% 0;\">").concat(obj.books[i].author, "</p>\n                    <div class=\"container rate\">\n                    ").concat(getStars(obj.books[i].rating, 1), "\n                    </div>\n                </div>\n            </div>\n        </div> ");

    bookContainer[1].innerHTML += _book;
    clickBook();
  }
});

function getStars(rating, number) {
  /*Function to get the stars icon*/
  if (rating == undefined) {
    /*If rating is undefined*/
    rating = 0;
  }

  var stars;
  var ratingNumber = Math.trunc(Number(rating));

  if (number == 1) {
    /*If the stars are blue*/
    for (var i = 0; i < ratingNumber; i++) {
      stars ? stars += '<i class="fas fa-star"></i>\n' : stars = '<i class="fas fa-star"></i>\n';
    }

    if (ratingNumber !== 5) {
      for (var i = 0; i < 5 - ratingNumber; i++) {
        stars ? stars += '<i class="far fa-star"></i>\n' : stars = '<i class="far fa-star"></i>\n';
      }
    }
  } else {
    /*If the stars are yellow*/
    for (var i = 0; i < ratingNumber; i++) {
      stars ? stars += '<i class="fas fa-star stars"></i>\n' : stars = '<i class="fas fa-star stars"></i>\n';
    }

    if (ratingNumber !== 5) {
      for (var i = 0; i < 5 - ratingNumber; i++) {
        stars ? stars += '<i class="far fa-star stars"></i>\n' : stars = '<i class="far fa-star stars"></i>\n';
      }
    }
  }

  return stars;
}

},{"node-fetch":2}],2:[function(require,module,exports){
(function (global){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
