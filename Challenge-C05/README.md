# Challenge 05
### Home page for the final project

Challenge general information:

* Review the main layout for the bookstore application.
* Interact with the API for books which provide information of the books
* Use the endpoint: https://www.googleapis.com/books/v1/volumes?q=isbn:9781451648546, to get book information
* Create the model in JSON file to use as mocked data
* Start building the main layout for the site in a normal index.html file using SCSS and js to get the first prototype of the app with mocked data
* Create homepage of the bookstore app
* Create book preview page

## Installations
1. Node.js: Node.js was installed to npm use for modules installation.
2. Babel: Babel module was installed to convert ECMAScript 6 code into a backwards compatible version of JavaScript.
3. Gulp: Was installed to run Babel by doing tasks.
4. File system: Installed to create the json file with the books information.
5. Gulp-saas: To convert the SCCS code in CSS.

## Script to consume the API
* A ES5 script was made to consume the API information by making a request through a fetch, specifying the parameters to get only the objects of the books wanted.
* Then a new object was made to push in there only the information needed to be show. This information was inside a json.
* Finally the file system module was used to create and write a new json file with the especified information *books.json*., this by running by console the script.

## Script to show books 
* A ES6 script was made to consume what were in the json file created before.
* To show all the information that was got from the json file a HTML structure was modified by filling the fields in the elements with the correspondent information of each book.
* The HTML structure was passed to an element of the index by using innerHTML to show all the structure with it changes.
* Also two functions was created: clickBook function, to show the complete information of the book that was clicked. And getStars function, to get the stars icons that represents the rating of each book.
* This file was compiled by using babel thtough gulp to convert it in a ES5 code.

## SCSS to CSS
The SCSS file was converted by using gulp sass, specifing the route and the destination where the new file is going to be created.
