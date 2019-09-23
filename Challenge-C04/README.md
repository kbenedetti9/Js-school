# Challenge 04


## Create a piano player

Challenge general information

* Use event listener for add sounds of notes in a piano design 
* Build all design with CSS and HTML
* Add listeners for launch all sounds, found the sound resources in the notes folder (Download here)
* Enable click or keyboard events for proper user experience
* Push all the example in your GitHub repo

## HTML

**[1]** I started positioning the piano with its white and black keys.

**[2]** To show the user the keys in the keyboard that represents each piano key, I put the character of each key up the sharp keys and down the white ones.

**[3]** To show which note was pressed I add a div at the top, that will be changed every time the user press a key or click on it.

## CSS

**[1]** For the piano keys I decided to gave every note a different color to recognize it and style it .

**[2]** Also different colors were asigned to the circles that shows the keys that should be pressed to play the piano (Sharp and white keys).

**[3]** For the keys effects I changed their colors and gave it a margin.

**[4]** Finally I did the styles for the space where the notes played will be shown.

## JAVASCRIPT

I did three different functions that are going to be called when an event occurs, when the user click on a key (mousedown), when a key is pressed (keydown) and
when the user stops pressing the key (keyup).

* **Mouse down event:** Searchs for wich key was clicked on by doing the comparisson of the its ID with the IDs in the array of keys IDs to obtain wich audio will be played, the note that is going to be showed at the top and the style that will be applied. 

* **Key down event:** Does a comparisson between the key that was pressed and the array of key codes to obtain wich audio will be played, the note that is going to be showed at the top and the style that will be applied.

* **Key up event:** Does a comparisson between the key that was pressed and the array of key codes to obtain wich active style is going to be removed.

I used different arrays to get in an easier way all the elements like: audios, keys, keycodes, notes and active styles. All of them to relate these elements by using the index.


All the files were commented.
