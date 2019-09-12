# Challenge 02
### RESTful APIs and HTTP requests

Challenge general information:

* Download POSTMAN and get information for a superhero from Marvel API
* Access to https://developer.marvel.com/docs and do all steps to get an API key to get access
* Get information related to the list of characters of Cable & Deadpool (2004) #46 (Zombie Variant)
* Get a list of all stories when Agent X (Nijo) appears
* Generate JSON document with this information and push to GitHub repo

### What I needed to start

* Install postman: I downloaded and installed postman tool to be able to do the queries by GET method. 
* Get an API key: To get the public and private key I registered in marvel's URL to create my developer account.
* Get the hash: With my public and private API key, and a timestamp I generated the hash that I had to use for the queries, by using an online hash generator.


### First query: Cable & Deadpool characters (2004) #46 (Zombie Variant)

I did the request to get the information of Cable & Deadpool characters by using as parameters a timestamp of one, the public API key and the hash that I had generated before, with the request URL:http://gateway.marvel.com/v1/public/comics/21845 that shows as after the slash the ID that belongs to the comic that I was searching for: *Cable & Deadpool (Zombie Variant)*. 
I got the ID of the comic before I did the request to make it easier and got only the information of the comic I wanted, this by doing another request at postman by using : http://gateway.marvel.com/v1/public/comics that shows all the comics.


### Second query: Agent X stories

I did the request by using the same parameters as the first query, but I noticed that the results had to be 23 and postman showed only 20, 
for that I added one more parameter that allowed to show all the results I was searching for, this by establishing a limit of 23. 
The request URL was : http://gateway.marvel.com/v1/public/characters/1011031/stories that shows after characters the ID of *Agent X* to specify the character I was requesting.
I got *Agent X* ID with http://gateway.marvel.com/v1/public/characters, request URL used to show all characters. 
