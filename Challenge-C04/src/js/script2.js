var key = Array.from(document.getElementsByClassName("key"));//Key array for every key element (by class)
var keyId = [];//Array for the keys ID

var keyCode = [81, 50, 87, 51, 69, 82, 53, 84, 54, 89, 55, 85, 86, 71, 66, 72, 78, 77, 75, 188, 76, 190, 186, 191];//Array for the key codes that will be used

var myNote = ["DO", "DO#", "RE", "RE#", "MI", "FA", "FA#", "SOL", "SOL#", "LA", "LA#", "SI", "DO", "DO#", "RE", "RE#", "MI", "FA", "FA#", "SOL", "SOL#", "LA", "LA#", "SI"];//Array for notes name
var note = document.getElementById("myNote");//Getting div ID to show note name

var activeClass = ["doActive","blackActive","reActive","blackActive","miActive","faActive","blackActive","solActive","blackActive","laActive","blackActive","siActive",
                    "doActive","blackActive","reActive","blackActive","miActive","faActive","blackActive","solActive","blackActive","laActive","blackActive","siActive"];//Class names to active CSS styles when a key is pressed

for (var i = 0; i < key.length; i++) {//For to obtain all key IDs
    keyId.push(key[i].id);//Pushing IDs into keyId array
}

var audio = Array.from(document.getElementsByTagName("audio"));//Array for every audio element (by tag)
var audioId = [];//Array for audio IDs

for (var i = 0; i < audio.length; i++) {//For to obtain all audio IDs
    audioId.push(audio[i].id)//Pushing IDs into audioId array
}

for (let i = 0; i < 24; i++) {
    document.getElementById(keyId[i]).addEventListener("mousedown", function (e) {//Calling the mousedown event by the element ID
    var audioPlay = document.getElementById(audioId[i]);//Keeping the audio that corresponds with the key in a new variable
    audioPlay.currentTime = 0;//Restarting the audio
    audioPlay.play();//Playing the audio
    note.innerHTML = myNote[i];//Changing the div element with the note name
    });
}

window.addEventListener("keydown", function (e) {//Calling the keydown event
    var repeat = event.repeat;//Preventing the repetition of th sound when a key keeps press
    if (repeat) {
        return;
    }
    for (let i = 0; i < 24; i++) {
        if (e.keyCode == keyCode[i]) {//Comparing the key pressed with the array of keys
            var audioPlay = document.getElementById(audioId[i]);//Keeping the audio that corresponds with the key in a new variable
            audioPlay.currentTime = 0;//Restarting the audio
            audioPlay.play();//Playing the audio
            note.innerHTML = myNote[i];//Changing the div element with the note name
            key[i].classList.add(activeClass[i]);//Adding class to key element for styling
        }
    }
}, false);

window.addEventListener("keyup", function (e) {//Calling the keyup event
    for (let i = 0; i < 24; i++) {
        if (e.keyCode == keyCode[i]) {//Comparing the key pressed with the array of keys
            key[i].classList.remove(activeClass[i]);//Removing class to key element for styling
        }
    }
}, false);

