const note = document.getElementById("myNote");

const do_1 = document.getElementById("do_1");
do_1.addEventListener("mousedown", playSound1);
do_1.addEventListener("mousedown", myNote);
const do_1_n = document.getElementById("do_1_n");
do_1_n.addEventListener("mousedown", playSound2);
do_1_n.addEventListener("mousedown", myNote2);
const re_1 = document.getElementById("re_1");
re_1.addEventListener("mousedown", playSound3);
re_1.addEventListener("mousedown", myNote3);
const re_1_n = document.getElementById("re_1_n");
re_1_n.addEventListener("mousedown", playSound4);
re_1_n.addEventListener("mousedown", myNote4);
const mi_1 = document.getElementById("mi_1");
mi_1.addEventListener("mousedown", playSound5);
mi_1.addEventListener("mousedown", myNote5);
const fa_1 = document.getElementById("fa_1");
fa_1.addEventListener("mousedown", playSound6);
fa_1.addEventListener("mousedown", myNote6);
const fa_1_n = document.getElementById("fa_1_n");
fa_1_n.addEventListener("mousedown", playSound7);
fa_1_n.addEventListener("mousedown", myNote7);
const sol_1_ = document.getElementById("sol_1");
sol_1.addEventListener("mousedown", playSound8);
sol_1.addEventListener("mousedown", myNote8);
const sol_1_n = document.getElementById("sol_1_n");
sol_1_n.addEventListener("mousedown", playSound9);
sol_1_n.addEventListener("mousedown", myNote9);
const la_1 = document.getElementById("la_1");
la_1.addEventListener("mousedown", playSound10);
la_1.addEventListener("mousedown", myNote10);
const la_1_n = document.getElementById("la_1_n");
la_1_n.addEventListener("mousedown", playSound11);
la_1_n.addEventListener("mousedown", myNote11);
const si_1 = document.getElementById("si_1");
si_1.addEventListener("mousedown", playSound12);
si_1.addEventListener("mousedown", myNote12);
const do_2 = document.getElementById("do_2");
do_2.addEventListener("mousedown", playSound13);
do_2.addEventListener("mousedown", myNote13);
const do_2_n = document.getElementById("do_2_n");
do_2_n.addEventListener("mousedown", playSound14);
do_2_n.addEventListener("mousedown", myNote14);
const re_2 = document.getElementById("re_2");
re_2.addEventListener("mousedown", playSound15);
re_2.addEventListener("mousedown", myNote15);
const re_2_n = document.getElementById("re_2_n");
re_2_n.addEventListener("mousedown", playSound16);
re_2_n.addEventListener("mousedown", myNote16);
const mi_2 = document.getElementById("mi_2");
mi_2.addEventListener("mousedown", playSound17);
mi_2.addEventListener("mousedown", myNote17);
const fa_2 = document.getElementById("fa_2");
fa_2.addEventListener("mousedown", playSound18);
fa_2.addEventListener("mousedown", myNote18);
const fa_2_n = document.getElementById("fa_2_n");
fa_2_n.addEventListener("mousedown", myNote19);
fa_2_n.addEventListener("mousedown", playSound19);
const sol_2_ = document.getElementById("sol_2");
sol_2.addEventListener("mousedown", myNote20);
sol_2.addEventListener("mousedown", playSound20);
const sol_2_n = document.getElementById("sol_2_n");
re_2.addEventListener("mousedown", myNote21);
re_2.addEventListener("mousedown", playSound21);
const la_2 = document.getElementById("la_2");
la_2.addEventListener("mousedown", myNote22);
la_2.addEventListener("mousedown", playSound22);
const la_2_n = document.getElementById("la_2_n");
la_2_n.addEventListener("mousedown", myNote23);
la_2_n.addEventListener("mousedown", playSound23);
const si_2 = document.getElementById("si_2");
si_2.addEventListener("mousedown", myNote24);
si_2.addEventListener("mousedown", playSound24);




function playSound1() {
   let audio = document.getElementById("audio");
   audio.currentTime = 0;
   audio.play();
   myNote();
}

function playSound2() {
   let audio2 = document.getElementById("audio2");
   audio2.currentTime = 0;
   audio2.play();
}
function playSound3() {
   let audio3 = document.getElementById("audio3");
   audio3.currentTime = 0;
   audio3.play();
}
function playSound4() {
   let audio4 = document.getElementById("audio4");
   audio4.currentTime = 0;
   audio4.play();
}
function playSound5() {
   let audio5 = document.getElementById("audio5");
   audio5.currentTime = 0;
   audio5.play();
}
function playSound6() {
   let audio6 = document.getElementById("audio6");
   audio6.currentTime = 0;
   audio6.play();
}
function playSound7() {
   let audio7 = document.getElementById("audio7");
   audio7.currentTime = 0;
   audio7.play();
}
function playSound8() {
   let audio8 = document.getElementById("audio8");
   audio8.currentTime = 0;
   audio8.play();
}
function playSound9() {
   let audio9 = document.getElementById("audio9");
   audio9.currentTime = 0;
   audio9.play();
}
function playSound10() {
   let audio10 = document.getElementById("audio10");
   audio10.currentTime = 0;
   audio10.play();
}
function playSound11() {
   let audio11 = document.getElementById("audio11");
   audio11.currentTime = 0;
   audio11.play();
}
function playSound12() {
   let audio12 = document.getElementById("audio12");
   audio12.currentTime = 0;
   audio12.play();
}
function playSound13() {
   let audio13 = document.getElementById("audio13");
   audio13.currentTime = 0;
   audio13.play();
}
function playSound14() {
   let audio14 = document.getElementById("audio14");
   audio14.currentTime = 0;
   audio14.play();
}
function playSound15() {
   let audio15 = document.getElementById("audio15");
   audio15.currentTime = 0;
   audio15.play();
}
function playSound16() {
   let audio16 = document.getElementById("audio16");
   audio16.currentTime = 0;
   audio16.play();
}
function playSound17() {
   let audio17 = document.getElementById("audio17");
   audio17.currentTime = 0;
   audio17.play();
}
function playSound18() {
   let audio18 = document.getElementById("audio18");
   audio18.currentTime = 0;
   audio18.play();
}
function playSound19() {
   let audio19 = document.getElementById("audio19");
   audio19.currentTime = 0;
   audio19.play();
}
function playSound20() {
   let audio20 = document.getElementById("audio20");
   audio20.currentTime = 0;
   audio20.play();
}
function playSound21() {
   let audio21 = document.getElementById("audio21");
   audio21.currentTime = 0;
   audio21.play();
}
function playSound22() {
   let audio22 = document.getElementById("audio22");
   audio22.currentTime = 0;
   audio22.play();
}
function playSound23() {
   let audio23 = document.getElementById("audio23");
   audio23.currentTime = 0;
   audio23.play();
}
function playSound24() {
   let audio24 = document.getElementById("audio24");
   audio24.currentTime = 0;
   audio24.play();
}


window.addEventListener('keydown', function (e) {

   var repeat=event.repeat;
   if(repeat){
      return;
   }
   const key = e.keyCode;
   console.log(key);
   if (key == 81) {
      note.innerHTML = "DO";
      do_1.classList.add("doActivo");
      console.log("Q");
      playSound1();
   } else if (key == 50) {
      note.innerHTML = "DO#";
      do_1_n.classList.add("blackActivo");
      console.log("2");
      playSound2();
   } else if (key == 87) {
      re_1.classList.add("reActivo");
      note.innerHTML = "RE";
      console.log("w");
      playSound3();
   } else if (key == 51) {
      re_1_n.classList.add("blackActivo");
      note.innerHTML = "RE#";
      console.log("3");
      playSound4();
   } else if (key == 69) {
      mi_1.classList.add("miActivo");
      note.innerHTML = "MI";
      console.log("E");
      playSound5();
   } else if (key == 82) {
      fa_1.classList.add("faActivo");
      note.innerHTML = "FA";
      console.log("R");
      playSound6();
   } else if (key == 53) {
      fa_1_n.classList.add("blackActivo");
      note.innerHTML = "FA#";
      console.log("5");
      playSound7();
   } else if (key == 84) {
      sol_1.classList.add("solActivo");
      note.innerHTML = "SOL";
      console.log("T");
      playSound8();
   } else if (key == 54) {
      sol_1_n.classList.add("blackActivo");
      note.innerHTML = "SOL#";
      console.log("6");
      playSound9();
   } else if (key == 89) {
      note.innerHTML = "LA";
      la_1.classList.add("laActivo");
      console.log("Y");
      playSound10();
   } else if (key == 55) {
      note.innerHTML = "LA#";
      la_1_n.classList.add("blackActivo");
      console.log("7");
      playSound11();
   } else if (key == 85) {
      note.innerHTML = "SI";
      si_1.classList.add("siActivo");
      console.log("U");
      playSound12();
   } else if (key == 86) {
      note.innerHTML = "DO";
      do_2.classList.add("doActivo");
      console.log("V");
      playSound13();
   } else if (key == 71) {
      note.innerHTML = "DO#";
      do_2_n.classList.add("blackActivo");
      console.log("G");
      playSound14();
   } else if (key == 66) {
      note.innerHTML = "RE";
      re_2.classList.add("reActivo");

      console.log("B");
      playSound15();
   } else if (key == 72) {
      note.innerHTML = "RE#";
      re_2_n.classList.add("blackActivo");
      console.log("H");
      playSound16();
   } else if (key == 78) {
      note.innerHTML = "MI";
      mi_2.classList.add("miActivo");
      console.log("N");
      playSound17();
   } else if (key == 77) {
      note.innerHTML = "FA";
      fa_2.classList.add("faActivo");
      console.log("M");
      playSound18();
   } else if (key == 75) {
      note.innerHTML = "FA#";
      fa_2_n.classList.add("blackActivo");
      console.log("K");
      playSound19();
   } else if (key == 188) {
      note.innerHTML = "SOL";
      sol_2.classList.add("solActivo");
      console.log(",");
      playSound20();
   } else if (key == 76) {
      note.innerHTML = "SOL#";
      sol_2_n.classList.add("blackActivo");
      console.log("L");
      playSound21();
   } else if (key == 190) {
      note.innerHTML = "LA";
      la_2.classList.add("laActivo");
      console.log(".");
      playSound22();
   } else if (key == 186) {
      note.innerHTML = "LA#";
      la_2_n.classList.add("blackActivo");
      console.log(";");
      playSound23();
   } else if (key == 191) {
      si_2.classList.add("siActivo");
      note.innerHTML = "SI";
      console.log("/");
      playSound24();
   }

}, false);

//window.addEventListener('keyup',stopSound1);
// function stopSound1(){
//    var tt = audio.currentTime;
//     console.log("tiempo de pausa"+audio.currentTime); 
//  }
window.addEventListener('keyup', function (e) {
   const key = e.keyCode;
   console.log(key);
   if (key == 81) {
      do_1.classList.remove("doActivo");
   } else if (key == 50) {
      do_1_n.classList.remove("blackActivo");
   } else if (key == 87) {
      re_1.classList.remove("reActivo");
   } else if (key == 51) {
      re_1_n.classList.remove("blackActivo");
   } else if (key == 69) {
      mi_1.classList.remove("miActivo");
   } else if (key == 82) {
      fa_1.classList.remove("faActivo");
   } else if (key == 53) {
      fa_1_n.classList.remove("blackActivo");
   } else if (key == 84) {
      sol_1.classList.remove("solActivo");
   } else if (key == 54) {
      sol_1_n.classList.remove("blackActivo");
   } else if (key == 89) {
      la_1.classList.remove("laActivo");
   } else if (key == 55) {
      la_1_n.classList.remove("blackActivo");
   } else if (key == 85) {
      si_1.classList.remove("siActivo");
   } else if (key == 86) {
      do_2.classList.remove("doActivo");
   } else if (key == 71) {
      do_2_n.classList.remove("blackActivo");
   } else if (key == 66) {
      re_2.classList.remove("reActivo");
   } else if (key == 72) {
      re_2_n.classList.remove("blackActivo");
   } else if (key == 78) {
      mi_2.classList.remove("miActivo");
   } else if (key == 77) {
      fa_2.classList.remove("faActivo");
   } else if (key == 75) {
      fa_2_n.classList.remove("blackActivo");
   } else if (key == 188) {
      sol_2.classList.remove("solActivo");
   } else if (key == 76) {
      sol_2_n.classList.remove("blackActivo");
   } else if (key == 190) {
      la_2.classList.remove("laActivo");
   } else if (key == 186) {
      la_2_n.classList.remove("blackActivo");
   } else if (key == 191) {
      si_2.classList.remove("siActivo");
   }
}, false);


function myNote() {
   note.innerHTML = "DO";
}

function myNote2() {
   note.innerHTML = "DO#";
}

function myNote3() {
   note.innerHTML = "RE";
}

function myNote4() {
   note.innerHTML = "RE#";
}

function myNote5() {
   note.innerHTML = "MI";
}

function myNote6() {
   note.innerHTML = "FA";
}

function myNote7() {
   note.innerHTML = "FA#";
}

function myNote8() {
   note.innerHTML = "SOL";
}

function myNote9() {
   note.innerHTML = "SOL#";
}

function myNote10() {
   note.innerHTML = "LA";
}

function myNote11() {
   note.innerHTML = "LA#";
}

function myNote12() {
   note.innerHTML = "SI";
}

function myNote13() {
   note.innerHTML = "SI";
}
function myNote14() {
   note.innerHTML = "SI";
}
function myNote15() {
   note.innerHTML = "SI";
}
function myNote16() {
   note.innerHTML = "SI";
}
function myNote17() {
   note.innerHTML = "SI";
}
function myNote18() {
   note.innerHTML = "SI";
}
function myNote19() {
   note.innerHTML = "SI";
}
function myNote20() {
   note.innerHTML = "SI";
}
function myNote21() {
   note.innerHTML = "SI";
}

function myNote22() {
   note.innerHTML = "SI";
}

function myNote23() {
   note.innerHTML = "SI";
}
function myNote24() {
   note.innerHTML = "SI";
}
