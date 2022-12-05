
//Store Result in Global Variable
const result = document.getElementById ("answer");


//Write a demo function
//function resultAssign () {
    //num = 3 + 5 + 50 + 500 + 87 + 2;
    //result.innerHTML = num;
    //console.log("Variable num represents the number:" + num);}

// Call the function
//resultAssign()

// first button

function addTwoPlusTwo() {
    num = 2 + 2;
    result.innerHTML = num;
    console.log("Variable num represents the number:" + num);
}
//call
addTwoPlusTwo()

//second button

function addFourMinusTwo() {
    num = 4 - 2;
    result.innerHTML = num;
    console.log("Variable num represents the number:" + num);
}
//call
addFourMinusTwo()

//third button

function addTwoPlusTwo() {
    num = 2 * 2;
    result.innerHTML = num;
    console.log("Variable num represents the number:" + num);
}
//call
addTwoPlusTwo()

//Multiplication
function multiply(n1,n2) {
   let multiplication = n1 * n2;
   result.innerHTML = multiplication;
}

//Divide
function divide(n1,n2) {
    let division = n1 / n2;
    result.innerHTML = division;
 }
 //Substract
function substract(n1,n2) {
    let substraction = n1 - n2;
    result.innerHTML = substraction;
 }

