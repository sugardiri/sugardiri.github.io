//Grabs fivs from DOM to manipulate

let color1 = document.getElementById ("square1");
let color2 = document.getElementById ("square2");
let color3 = document.getElementById ("square3");

//Set square size dynamically
let squareHeight = 100;
let squareWidth = 100;

//Style our square using Dot Notation
color1.style.height = squareHeight + "px";
color1.style.width = squareWidth + "px";
color1.style.backgroundColor = "lightblue";

//Style Square  2
color2.style.height = squareHeight + "px";
color2.style.width = squareWidth + "px";
color2.style.backgroundColor = "lightpink";

//Style Square 3
color3.style.height = squareHeight + "px";
color3.style.width = squareWidth + "px";
color3.style.backgroundColor = "lightgreen";

//Create a function  to change Background color to color of respective squares

function bgChange (bg) {
    //reference background style
    document.body.style.background = bg;
}