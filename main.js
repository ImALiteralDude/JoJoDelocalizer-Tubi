// ==UserScript==
// @name         JoJoDelocalizer Tubi
// @namespace    https://github.com/ImALiteralDude/JoJoDelocalizer-Tubi/
// @version      1.0
// @description  Correct localized names on Tubi TV
// @author       Mr. PIC Ardia
// @match        *://tubitv.com/*
// @icon         https://www.google.com/s2/favicons?domain=tubitv.com
// @grant        none
// ==/UserScript==

function foo() {

var el = document.getElementById("captionsComponent").children

// Get element

el = document.getElementById("captionsComponent").children

// Get text

var text = el[0].innerText;

var newText;

function replaceText() {
    if (text.includes("Six Bullets")){
    newText = text.replace(/Six Bullets/g, "Sex Pistols");
    }
else if (text.includes("Zipper Man")){
    newText = text.replace(/Zipper Man/g, "Sticky Fingers");
    }
else if (text.includes("Golden Wind") && !text.includes("JoJo's Bizarre Adventure")){
    newText = text.replace(/Golden Wind/g, "Gold Experience");
    }
else if (text.includes("Shining Diamond")){
    newText = text.replace(/Shining Diamond/g, "Crazy Diamond");
    }
else if (text.includes("Worse Company")){
    newText = text.replace(/Worse Company/g, "Bad Company");
    }
else if (text.includes("Moody Jazz")){
    newText = text.replace(/Moody Jazz/g, "Moody Blues");
    }
else if (text.includes("Reverb")){
    newText = text.replace(/Reverb/g, "Echoes");
    }
else if (text.includes("Chili Pepper")){
    newText = text.replace(/Chili Pepper/g, "Red Hot Chili Pepper");
    }
else if (text.includes("Cool Ice")){
    newText = text.replace(/Cool Ice/g, "Vanilla Ice");
    }
else if (text.includes("Deadly Queen")){
    newText = text.replace(/Deadly Queen/g, "Killer Queen");
    }
else if (text.includes("White Ice")){
    newText = text.replace(/White Ice/g, "White Album");
    }
else if (text.includes("Manishu Booi")){
    newText = text.replace(/Manishu Booi/g, "Mannish Boy");
    }
else if (text.includes("Show Off")){
    newText = text.replace(/Show Off/g, "Surface");
    }
else if (text.includes("Pole Jam")){
    newText = text.replace(/Pole Jam/g, "Pearl Jam");
    }
else {
newText = text
}
}
replaceText();
if (newText!=0){
el[0].innerText=newText;
}
}
setInterval(foo, 10)
